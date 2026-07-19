import { describe, it, expect } from 'vitest'
import { POST } from '@/app/api/contact/route'

describe('POST /api/contact Integration', () => {
  it('should return 400 when payload is incomplete', async () => {
    const mockRequest = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        nama: '',
        namaAnak: 'Albi',
        usia: '',
        wa: '123',
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '127.0.0.1',
      },
    })

    const response = await POST(mockRequest)
    expect(response.status).toBe(400)

    const data = await response.json()
    expect(data.error).toBeDefined()
  })

  it('should return 200 when payload is valid', async () => {
    const mockRequest = new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        nama: 'Ahmad Supandi',
        namaAnak: 'Albi',
        usia: '2 Tahun',
        wa: '081299887766',
        pesan: 'Mohon info biaya pendaftaran.',
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '192.168.10.15',
      },
    })

    const response = await POST(mockRequest)
    expect(response.status).toBe(200)

    const data = await response.json()
    expect(data.message).toBe('Data pendaftaran berhasil diproses.')
  })
})
