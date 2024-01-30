import Bookcard from "./components/Bookcard";
import prisma from './lib/prisma';

interface Book {
  title: string;
  author: string;
  cover: string;
  rating: number;
  information: string
}
export default async function Home() {
  const books = await prisma.book.findMany();
  
  return ( 
    <>
      <main className="my-20 mx-20 flex flex-wrap justify-center gap-4 p-4 h-screen">
        {
          books.map( book => <Bookcard book={book} key={book.id}></Bookcard>)
        }
      </main>
    </>
  );
}
