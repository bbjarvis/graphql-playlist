import { 
    gql,
  } from "@apollo/client";

  const getBooksQuery = gql`
  {
      books{
          name
          id
      }
  }
`

export { getBooksQuery };