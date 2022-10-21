import { gql } from "@apollo/client";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

function BookList() {
    return (
        // console.log(this.props)
      <div>
        <ul id="book-list">
            <li>Book name</li>
        </ul>
      </div>
    );
  }
  
  export default graphql(getBooksQuery)(BookList);