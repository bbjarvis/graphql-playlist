import {
    useQuery,
    useMutation,
} from "@apollo/client";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import React, { useState } from 'react'

function AddBook() {

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')
    const [addBook, { newData }] = useMutation(addBookMutation);


    const submitForm = (e) => {

        e.preventDefault();
        addBook({
            variables:{
                name,
                genre,
                authorId
            },
            refetchQueries: [{ query: getBooksQuery}]
        })
        setName("")
        setGenre("")
        setAuthorId("")
    }

    const { data } = useQuery(getAuthorsQuery);

    if (data) return (
        <form id="add-book" onSubmit={e => submitForm(e)}>
 

            <div className="field">
                <label>Book name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
                    <option>Select Author</option>
                    {data.authors.map((author) => {
                        return (
                            <option key={author.id} value={author.id}>{author.name}</option>
                        )
                    })}
                </select>
            </div>

            <button>+</button>

        </form>
    );
}

export default AddBook;