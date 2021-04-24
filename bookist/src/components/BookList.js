import React from 'react';


const BookList = (props) => {
    return (
        <>
            {props.books.map((book, idx) => (
                <div key={idx} className='dispaly'>
                    <h1>{book.title}</h1>
                    <img src={book.img} onClick={props.addToShelf(book.title)} />
                    <h1>{book.author}</h1>
                </div>
            ))}
        </>
    )
}

export default BookList



