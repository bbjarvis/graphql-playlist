
function Book({book, setId}) {
    return(
        <div className="Book">
            <h2 key={book.id} value={book.id} onClick={() => {
            setId(book.id)
          }}>
                {book.name}</h2>
        </div>
    )
}

export default Book;
