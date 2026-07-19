import { z } from 'zod'

export const contactSchema = z.object({
  nama: z
    .string()
    .min(2, { message: 'Nama orang tua minimal 2 karakter.' })
    .max(100, { message: 'Nama orang tua maksimal 100 karakter.' }),
  namaAnak: z
    .string()
    .min(2, { message: 'Nama anak minimal 2 karakter.' })
    .max(100, { message: 'Nama anak maksimal 100 karakter.' }),
  usia: z
    .string()
    .min(1, { message: 'Mohon masukkan usia anak.' }),
  wa: z
    .string()
    .min(8, { message: 'Nomor WhatsApp minimal 8 digit.' })
    .max(20, { message: 'Nomor WhatsApp maksimal 20 digit.' })
    .regex(/^[0-9+\-\s]+$/, { message: 'Nomor WhatsApp hanya boleh berisi angka dan karakter +, -.' }),
  pesan: z.string().optional().default(''),
})

export type ContactInput = z.infer<typeof contactSchema>
