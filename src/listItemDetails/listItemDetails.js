import React from 'react';
import './listItemDetails.css'

class ListItemDetails extends React.Component {
    
    //prevent books without retail values from crashing the app
    showPrice = (price) => {
        if(price.hasOwnProperty('retailPrice')) {
            return <p>Retails for: ${price.retailPrice.amount}</p>
        } else {
            return ""
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.book.description}</p>
                {this.showPrice(this.props.saleInfo)}
            </div>
        )
    }
}

export default ListItemDetails