import Book from "../components/Book"

const createBook = async (book: Book) => {
    try {
        const formDataToSend = new FormData();
        formDataToSend.append('title', book.title);
        formDataToSend.append('author', book.author);
        formDataToSend.append('rating', book.rating);
        formDataToSend.append('information', book.information);
        formDataToSend.append('tags', JSON.stringify(book.tags))
        formDataToSend.append('cover', book.cover);
        const response = await fetch('/api/book', {
            method: 'POST',
            body: formDataToSend
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

const updateBook = async (book: Book) => {
    try {
        const formDataToSend = createFormData(book);
        console.log(formDataToSend);

        const response = await fetch('/api/book', {
            method: 'PUT',
            body: formDataToSend
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

const createFormData = (book: Book): FormData => {
    const formDataToSend = new FormData();
    Object.entries(book).forEach(([key, value]) => {
        console.log(key)
        if (value != null && value !== undefined) {
            if (key === "tags") {
                
            }
            if (key === "cover") {
                formDataToSend.append(key, value)
            } else {
                formDataToSend.append(key, value.toString());
            }

        console.log(key, value)
        }
    });
    return formDataToSend;
};

const deleteBook = async (bookId: string) => {
    const deletedBook = await fetch('/api/book?' + new URLSearchParams({
        id: bookId
    }), { method: 'DELETE' });
}
export { createBook, updateBook, deleteBook };