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
        //console.log(this.props.saleInfo.retailPrice.amount)
        const book = this.props.volumeInfo
        const alt = "cover image for " + book.title

        const author = book.authors
            ? <p>Author: {book.authors.join(', ')}</p>
            : "";

        const details = this.state.showDetails
            ? <ListItemDetails 
            book={book}
            saleInfo={this.props.saleInfo}/>
            : <form onSubmit={e => this.showDetails(true)}>
                <button type="submit">More Details</button>
                </form>;
        return (
            <div className={`"listItem group "${book.printType}`}>
                <h2 className="bookTitle">{book.title}</h2>
                <div className="bookImageContainer item">
                    <img className="bookImage" src={book.imageLinks.thumbnail} alt={alt}/>
                </div>
                <div className="bookDetailsContainer item">
                    {author}
                    {details}
                </div>
            </div>
        )
    }
}

export default ListItem