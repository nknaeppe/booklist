import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/lib/prisma'
import { randomUUID } from 'crypto'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('cover') as unknown as File
  let path = "";
  let filename = "";
  if (file != null) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    filename = randomUUID() + "." + file.name.split(".").pop();
    path = "./public/tmp/" + filename
    await writeFile(path, buffer)
  }

  const user = await prisma.book.create(
    {
      data: {
        title: data.get("title").toString(),
        author: data.get("author")?.toString(),
        cover: filename,
        rating: parseInt(data.get("rating")?.toString()),
        information: data.get("information")?.toString(),
        tags: JSON.parse(data.get("tags"))
      }}
    )
  return NextResponse.json({ success: true })
}