import Bookcard from "./components/bookcard";

export default function Home() {
  return (
    <>
      <main className="my-20 mx-20 flex flex-wrap justify-center gap-4">
        <Bookcard />
        <Bookcard />
        <Bookcard />
        <Bookcard />
        <Bookcard />
        <Bookcard />
        <Bookcard />
      </main>
    </>
  );
}
