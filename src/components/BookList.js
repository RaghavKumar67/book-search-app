import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }){

    const renderedBook = books.map((book) => {

        return <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete}/>

    });

    return <div className="book-list">
        {renderedBook}

        
    </div>
};

export default BookList;