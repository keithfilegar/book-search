import React from 'react';
import './printTypeFilter.css'

class PrintTypeFilter extends React.Component {
    
    render() {
        return (
            <form>
                <label htmlFor="printType">Print Type: </label>
                <select name="printType" id="printType" onChange={e => this.props.setPrintTypeFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
            </form>
        )
    }
}

export default PrintTypeFilter