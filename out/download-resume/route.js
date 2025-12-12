import fs from 'fs'
import path from 'path'
import stream from 'stream'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf')
    // Stream the file to avoid buffering issues for large files
    const stat = await fs.promises.stat(filePath)
    const fileStream = fs.createReadStream(filePath)
    const webStream = stream.Readable.toWeb(fileStream)

    const filename = 'Abinav_Resume.pdf'
    const encoded = encodeURIComponent('Abinav Resume.pdf')

    return new NextResponse(webStream, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': String(stat.size),
        // filename (simple) and filename* (RFC5987) for UTF-8 fallback
        'Content-Disposition': `attachment; filename="${filename}"; filename*=UTF-8''${encoded}`,
      },
    })
  } catch (err) {
    return new NextResponse('Resume not found', { status: 404 })
  }
}
