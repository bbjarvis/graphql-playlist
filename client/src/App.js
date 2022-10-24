// components
import React, { Component }  from 'react';
import BookList from "./components/BookList";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
   cache: new InMemoryCache( ),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Brett's Reading List</h1>
        <BookList />

      </div>
    </ApolloProvider>
  );
}

export default App;
