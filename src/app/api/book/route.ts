import { NextRequest, NextResponse } from "next/server";
import Book from "@/app/components/Book";
import prisma from "@/app/lib/prisma";
import { randomUUID } from "crypto";
import { writeFile, unlink } from "fs/promises";

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const bookId: string = searchParams.get("id");
  await prisma.book.delete({
    where: {
      id: bookId,
    },
  });
  await deleteImage(bookId);
  return NextResponse.json({ success: true });
}

export async function PUT(request: NextResponse) {
  const formData = await request.formData();
  const bookId: string = formData.get("id")?.toString();
  const file: File | null = formData.get("cover") as unknown as File;
  let path = "";
  let filename = "";
  if (file != null) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    filename = randomUUID() + "." + file.name.split(".").pop();
    path = "./public/tmp/" + filename;
    await writeFile(path, buffer);
    await deleteImage(bookId);
  }
  const updatedBook = convertFormDataToBook(formData, filename);
  const updateUser = await prisma.book.update({
    where: {
      id: bookId,
    },
    data: updatedBook,
  });
  return NextResponse.json({ success: true });
}
const deleteImage = async (bookId: string) => {
  const book: Book = await prisma.book.findFirst({
    where: {
      id: bookId,
    },
  });
  const oldImagePath = "./public/tmp/" + book.cover;
  unlink(oldImagePath);
};

const convertFormDataToBook = (formData: FormData, filename: string): Book => {
  const book: Partial<Book> = {};

  formData.forEach((value, key) => {
    switch (key) {
      case "id":
      case "title":
      case "author":
      case "information":
        book[key] = value as string;
        break;
      case "rating":
        book[key] = parseInt(value as string, 10);
        break;
      case "cover":
        book[key] = filename;
        break;
      default:
        break;
    }
  });

  return book as Book;
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file: File | null = formData.get("cover") as unknown as File;
  let path = "";
  let filename = "";
  if (file != null) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    filename = randomUUID() + "." + file.name.split(".").pop();
    path = "./public/tmp/" + filename;
    await writeFile(path, buffer);
  }

  const book = await prisma.book.create({
    data: {
      title: formData.get("title").toString(),
      author: formData.get("author")?.toString(),
      cover: filename,
      rating: parseInt(formData.get("rating")?.toString()),
      information: formData.get("information")?.toString(),
      tags: JSON.parse(formData.get("tags")),
    },
  });
  return NextResponse.json({ success: true });
}
