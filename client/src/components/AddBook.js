import Book from './Book'
import {
    useQuery,
} from "@apollo/client";
import { getAuthorsQuery } from '../queries/queries';


function AddBook() {

    const { data } = useQuery(getAuthorsQuery);
    console.log(data)
    if (data) return (
        <form id="add-book">

            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Author:</label>
                <select>
                    {data.authors.map((author) => {
                        return (
                            <option>{author.name}</option>
                        )
                    })}
                </select>
            </div>

            <button>+</button>

        </form>
    );
}

export default AddBook;