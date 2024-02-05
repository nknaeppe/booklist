import Image from "next/image"
import BookForm from '@/app/components/BookForm';
import Book from '@/app/components/Book';
import prisma from '@/app/lib/prisma';

export default async function EditBook({ params }: { params: { id: string } }) {
  const book: Book = await getBook(params.id);
  return (
    <main className="my-20 mx-20 flex flex-col justify-center gap-4 p-8 h-screen">
      <h1 className='font-bold text-center text-3xl mt-16'>Edit Book</h1>
      <div className="flex flex-row justify-center gap-4">
        <div className="h-40 w-80">
          {book?.cover ? <Image
            src={`/tmp/` + book.cover}
            alt="book cover"
            width={500}
            height={500}
            className="rounded-md"
          /> : <></>}
        </div>
        <BookForm book={book} isEdit={true}> </BookForm>
      </div>
    </main>
  )
}

async function getBook(bookId: string) {
  const book = await prisma.book.findFirst({
    where: {
      id: bookId
    },
  });
  return book;
}
