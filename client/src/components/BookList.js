import Book from './Book'
import { 
  useQuery,
} from "@apollo/client";
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';


function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data);
  if (loading) return <p>Loading....</p>
  if (error) return <p>Something went wrong</p>
  return data.books.map(book => {

    return (
      <div>
        <ul id="book-list">
          <Book book={book}/>
        </ul>
        <BookDetails />
      </div>
    );
  })
}
  
  export default BookList;