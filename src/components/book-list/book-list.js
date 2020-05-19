import React, {Component} from "react";
import BookListItem from "../book-list-item/book-list-item";
import './book-list.css'
import {booksLoaded} from "../../actions";
import {compose} from "../../utils";
import {connect} from 'react-redux'
import withBookstoreService from "../hoc/with-bookstore-service";

class BookList extends Component {

    componentDidMount() {
        // 1. receive data
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();

        // 2. dispatch action to redux store
        this.props.booksLoaded(data)
    }

    render() {
        const {books} = this.props;
        return (
            <ul>{
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book}/>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => {
    return {
        books
    };
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);

