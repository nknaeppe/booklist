import { Book } from "@prisma/client";
import Bookcard from "../components/Bookcard";

export default async function Search({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const books = await prisma.book.findMany({
        where: {
          title: {
            contains: query
          },
        },
      });

    return ( 
      <>
        <main className="my-20 mx-20 flex flex-wrap justify-center gap-4 p-4 h-screen">
          {
           books.length > 0 ?  books.map( (book: Book) => <Bookcard book={book} key={book.id}></Bookcard>) : "NOT FOUND"
          }
        </main>
      </>
    );
  }
  