import { useState } from "react";

function BookSearch ({ onCreate }) {

    const[title, setTitle] = useState('');

    const handleChange = (event) => {

        setTitle(event.target.value);

    };

    const handleSubmit = (event) => {

        event.preventDefault();
        onCreate(title);
        setTitle('');

    };

    return (
    
    <div className="book-create"> 
        <h3>Add Book</h3>
        <form onSubmit={handleSubmit}>

            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Create Book</button>

        </form>

    </div>
);
}

export default BookSearch;


