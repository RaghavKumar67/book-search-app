import { useState, useEffect } from "react";
import axios from "axios";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";

function App(){

    const[books, setBooks] = useState([]);

    const fetchBooks = async () =>{

        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);

    };


    useEffect(()=>{
        fetchBooks();
    }, []);


    const editBookById = async (id, newTitle) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title:newTitle
        });

        const updatedBooks = books.map((book) => {

           if( book.id === id){
            return {...book, ...response.data};
           }

           return books;

        });

        setBooks(updatedBooks);

    };

    const deleteBookById = async (id) => {


        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book)=>{

            return book.id !== id;

        });


       setBooks(updatedBooks);
    };

    const createBook = async (title) => {


        const response = await axios.post('http://localhost:3001/books',{

            title

        });

        const updatedBooks = [
                ...books,
                response.data
        ];

        setBooks(updatedBooks);

    };

    return <div>

        <BookList books={books} onEdit={editBookById} onDelete = {deleteBookById}/>
        <BookSearch onCreate={createBook}/>

    </div>;
}

export default App;