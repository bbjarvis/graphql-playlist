import {
    gql,
    useQuery,
} from "@apollo/client";
import { getBookQuery } from '../queries/queries';


function BookDetails() {
    const { loading, error, data } = useQuery(getBookQuery);
    console.log(data);
    if (loading) return <p>Loading....</p>
    if (error) return <p>Something went wrong</p>
    if (data)

        return (
            <div id="book-details">

                <p>Output book details</p>

            </div>
        );
    
}

export default BookDetails;
