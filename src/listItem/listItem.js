import React from 'react';
import './listItem.css'

class ListItem extends React.Component {
    render() {
        const book = this.props.volumeInfo
        const alt = "cover image for " + book.title

        const author = book.authors
            ? <p>Author: {book.authors.join(', ')}</p>
            : "";
        return (
            <div className={`"listItem group "${book.printType}`}>
                <h2 className="bookTitle">{book.title}</h2>
                <div className="bookImageContainer item">
                    <img className="bookImage" src={book.imageLinks.thumbnail} alt={alt}/>
                </div>
                <div className="bookDetailsContainer item">
                    {author}
                    <p>{book.description}</p>
                </div>
            </div>
        )
    }
}

export default ListItem