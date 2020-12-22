import React from 'react';
import './bookTypeFilter.css'

class BookTypeFilter extends React.Component {

    render() {
        return (
            <form>
                <label htmlFor="bookType">Print Type: </label>
                <select name="bookType" id="bookType" onChange={e => this.props.setBookTypeFilter(e.target.value)}>
                    <option value="none">No Filter</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free eBooks</option>
                    <option value="paid-ebooks">Paid eBooks</option>
                    <option value="ebooks">eBooks</option>
                </select>
            </form>
        )
    }
}


export default BookTypeFilter