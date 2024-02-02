import Book from "../components/Book"

const createBook = async (book: Book) => {
    console.log(book)
    try {
        const formDataToSend = new FormData();
        formDataToSend.append('title', book.title);
        formDataToSend.append('author', book.author);
        formDataToSend.append('rating', book.rating);
        formDataToSend.append('information', book.information);
        formDataToSend.append('tags', JSON.stringify(book.tags))
        formDataToSend.append('cover', book.cover);
        const response = await fetch('/api/new', {
            method: 'POST',
            body: formDataToSend
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

const updateBook = async (book: Book) => {
    try {
        const formDataToSend = new FormData();
        if (book.title) {
            formDataToSend.append("title", book.title)
        }
        if (book.author) {
            formDataToSend.append("author", book.author)
        }
        if (book.rating) {
            formDataToSend.append("rating", book.rating.toString())
        }
        if (book.information) {
            formDataToSend.append("information", book.information)
        }
        if (book.tags) {
            formDataToSend.append("tags", JSON.stringify(book.tags))
        }
        const response = await fetch('/api/edit', {
            method: 'UPDATE',
            body: formDataToSend
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

export { createBook, updateBook };