import Book from './Book'
import { 
  useQuery,
} from "@apollo/client";
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';
import React, { useState } from 'react'


function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [id, setId] = useState("")

  if (loading) return <p>Loading....</p>
  if (error) return <p>Something went wrong</p>
  return (
    <div>
       <BookDetails bookId={id}/>
    {data.books.map(book => {
    return (

        <ul 
          key={book.id}
          id="book-list"
          >
          <Book setId={setId} book={book}/>
        </ul>
     
    );
  })}
 
  </div>

  )
}
  
  export default BookList;