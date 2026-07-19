import { describe, it, expect } from 'vitest'
import { contactSchema } from '@/lib/validations/contact'

describe('contactSchema validation', () => {
  it('should validate correct contact input data', () => {
    const validData = {
      nama: 'Budi Santoso',
      namaAnak: 'Albi',
      usia: '2 Tahun',
      wa: '081234567890',
      pesan: 'Tanya info jam operasional.',
    }

    const result = contactSchema.safeParse(validData)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.nama).toBe('Budi Santoso')
      expect(result.data.namaAnak).toBe('Albi')
    }
  })

  it('should fail validation when required fields are missing', () => {
    const invalidData = {
      nama: '',
      namaAnak: 'Albi',
      usia: '',
      wa: '123',
    }

    const result = contactSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      const formattedErrors = result.error.format()
      expect(formattedErrors.nama?._errors).toContain('Nama orang tua minimal 2 karakter.')
      expect(formattedErrors.wa?._errors).toContain('Nomor WhatsApp minimal 8 digit.')
    }
  })

  it('should fail validation when phone number contains invalid letters', () => {
    const invalidPhoneData = {
      nama: 'Budi Santoso',
      namaAnak: 'Albi',
      usia: '2 Tahun',
      wa: '081234abcde',
    }

    const result = contactSchema.safeParse(invalidPhoneData)
    expect(result.success).toBe(false)
  })
})
