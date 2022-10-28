
function Book({book}) {
    return(
        <div className="Book">
            <h2 key={book.id} value={book.id}>{book.name}</h2>
        </div>
    )
}

export default Book;
