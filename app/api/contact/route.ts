import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nama, namaAnak, usia, wa, pesan } = body

    if (!nama || !namaAnak || !usia || !wa) {
      return NextResponse.json(
        { error: 'Mohon isi semua field wajib.' },
        { status: 400 }
      )
    }

    // 1. Optional Database Storage (If Supabase key is configured)
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([{ nama, nama_anak: namaAnak, usia_anak: usia, wa, pesan }])
      if (dbError) {
        console.error('Supabase error:', dbError.message)
      }
    }

    // 2. Email Notification using Resend
    if (process.env.RESEND_API_KEY) {
      const { error: emailError } = await resend.emails.send({
        from: 'Amana Care Website <onboarding@resend.dev>',
        to: 'haloamana@gmail.com', // Change this to official email
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
    return NextResponse.json(
      { error: 'Terjadi kesalahan sistem internal.' },
      { status: 500 }
    )
  }
}
