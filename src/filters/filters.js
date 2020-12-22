import React from 'react';
import './filters.css'
import PrintTypeFilter from '../printTypeFilter/printTypeFilter'
import BookTypeFilter from '../bookTypeFilter/bookTypeFilter'

class Filters extends React.Component {
    render() {
        return (
            <div>
                <PrintTypeFilter 
                setPrintTypeFilter={this.props.setPrintTypeFilter}/>
                <BookTypeFilter 
                setBookTypeFilter={this.props.setBookTypeFilter}/>
            </div>
        )
    }
}

export default Filters