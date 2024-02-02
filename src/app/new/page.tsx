import BookForm from "../components/BookForm"
const AddBook = () => {
    return (
        <main className="my-20 mx-20 flex flex-col justify-center gap-4 p-4 h-screen">
            <h1 className='font-bold text-center text-3xl'>Add Book</h1>
            <BookForm book={null} isEdit={false}> </BookForm>
        </main>
    )
}

export default AddBook
