import {
    useQuery,
} from "@apollo/client";
import { getAuthorsQuery } from '../queries/queries';
import React, { useState, useEffect} from 'react'

function AddBook() {

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        setName("")
        setGenre("")
    }

    const { data } = useQuery(getAuthorsQuery);
    console.log(data)
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