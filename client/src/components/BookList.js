// import './Book'
import { 
  gql,
  useQuery,
} from "@apollo/client";

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data);
  if (loading) return <p>Loading....</p>
  if (error) return <p>Something went wrong</p>
  return data.books.map(book => {

    return (
      <div>
        <ul id="book-list">
            <li key={book.id}>{book.name}</li>
        </ul>
      </div>
    );
  })
}
  
  export default BookList;