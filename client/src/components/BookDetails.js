import {
    useQuery,
    useLazyQuery
} from "@apollo/client";
import { getBookQuery } from '../queries/queries';


function BookDetails({bookId}) {
    const { loading, error, data } = useQuery(getBookQuery, {variables: {id: bookId}});

    if (loading) return <p id="book-details">Loading....</p>
    // if (error) return <p id="book-details">Something went wrong</p>
    if (!data) return <p id="book-details">Please Select a Book to see Details</p>
    if (data)
    console.log(data);
        return (
            <div id="book-details">

                <h3>{data.book.name}</h3>
                <h4>Genre: {data.book.genre}</h4>
                <h5>Author: {data.book.author.name}</h5>
            </div>
        );
    
}

export default BookDetails;
