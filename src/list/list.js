import React from 'react';
import './list.css'
import ListItem from '../listItem/listItem'

class List extends React.Component {
    render() {
        const books = this
            .props
            .items
            .map((book, i) => <ListItem {...book} key={i}/>);
        return (
            <div className="bookList">
                {books}
            </div>
        )
    }
}

export default List