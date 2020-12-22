import React from 'react';
import './listItem.css'
import ListItemDetails from '../listItemDetails/listItemDetails'

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        }
    }
    showDetails(show){
        this.setState({
            showDetails: show
        })
    }


    render() {
        const book = this.props.volumeInfo
        const alt = "cover image for " + book.title

        const author = book.authors
            ? <p>Author: {book.authors.join(', ')}</p>
            : "";

        const details = this.state.showDetails
            ? <ListItemDetails 
            book={book}
            saleInfo={this.props.saleInfo}/>
            : <form onSubmit={e => this.showDetails(true)} className="moreDetails">
                <button type="submit">More Details</button>
                </form>;
        return (
            <div className="listItem">
                <h2 className="bookTitle">{book.title}</h2>
                <div className="group">
                    <div className="bookImageContainer item">
                        <img className="bookImage" src={book.imageLinks.thumbnail} alt={alt}/>
                    </div>
                    <div className="bookDetailsContainer item">
                        {author}
                        {details}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem