import prisma from './lib/prisma';
import Book from "./components/Book";
import Bookcard from './components/Bookcard';


export default async function Home() {
  const books = await prisma.book.findMany();
  
  return ( 
    <>
      <main className="my-20 mx-20 flex flex-wrap justify-center gap-4 p-4 h-screen">
        {
          books.map( (book: Book) => <Bookcard book={book} key={book.id}></Bookcard>)
        }
      </main>
    </>
  );
}
