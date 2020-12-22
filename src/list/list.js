import React from 'react';
import './list.css'
import ListItem from '../listItem/listItem'

class List extends React.Component {
    render() {
        const books = this
            .props
            .items
            .map((book, i) => <ListItem {...book} key={i}/>);
        //   this.state.results.filter(item => this.state.results.volumeInfo === printType)
        return (
            <div className="bookList">
                {books}
            </div>
        )
    }
}

export default List