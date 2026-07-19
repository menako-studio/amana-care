import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import * as Sentry from '@sentry/nextjs'
import { supabase } from '@/lib/supabase'
import { contactSchema } from '@/lib/validations/contact'
import { rateLimit } from '@/lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key')

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check (Max 5 submissions per minute per IP)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1'
    const limitResult = rateLimit(ip, 5, 60000)

    if (!limitResult.success) {
      return NextResponse.json(
        { error: 'Terlalu banyak permintaan. Silakan coba lagi beberapa saat lagi.' },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((limitResult.reset - Date.now()) / 1000).toString(),
          },
        }
      )
    }

    // 2. Body Parse & Zod Schema Validation
    const body = await request.json()
    const validationResult = contactSchema.safeParse(body)

    if (!validationResult.success) {
      const issues = validationResult.error.issues.map((issue) => issue.message)
      return NextResponse.json(
        { error: issues[0] || 'Mohon periksa kembali data pendaftaran Anda.', details: issues },
        { status: 400 }
      )
    }

    const { nama, namaAnak, usia, wa, pesan } = validationResult.data

    // 3. Optional Database Storage (If Supabase key is configured)
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([{ nama, nama_anak: namaAnak, usia_anak: usia, wa, pesan }])
      if (dbError) {
        console.error('Supabase error:', dbError.message)
      }
    }

    // 4. Email Notification using Resend
    if (process.env.RESEND_API_KEY) {
      const { error: emailError } = await resend.emails.send({
        from: 'Amana Care Website <onboarding@resend.dev>',
        to: 'haloamana@gmail.com',
        subject: `Pendaftaran Baru: ${namaAnak} (${usia})`,
        html: `
          <h3>Pendaftaran Calon Murid Baru</h3>
          <p><strong>Nama Orang Tua:</strong> ${nama}</p>
          <p><strong>Nama Anak:</strong> ${namaAnak}</p>
          <p><strong>Usia Anak:</strong> ${usia}</p>
          <p><strong>Nomor WhatsApp:</strong> ${wa}</p>
          <p><strong>Pesan/Pertanyaan:</strong> ${pesan || '-'}</p>
        `,
      })
      if (emailError) {
        console.error('Resend email error:', emailError)
      }
    }

    return NextResponse.json(
      { message: 'Data pendaftaran berhasil diproses.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API Contact Error:', error)
    Sentry.captureException(error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan sistem internal.' },
      { status: 500 }
    )
  }
}
