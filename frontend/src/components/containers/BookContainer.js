import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBookThunk, deleteBookThunk, editBookThunk } from "../../store/thunks";
import { BookView } from "../views";

class BookContainer extends Component {
  componentDidMount() {
    //getting book ID from url
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    return (
      <BookView
        book={this.props.book}
        editBook={this.props.editBook}
        deleteBook={this.props.deleteBook}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    book: state.book,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchBook: (id) => dispatch(fetchBookThunk(id)),
    editBook: (bookId) => dispatch(editBookThunk(bookId)),
    deleteBook: (bookId) => dispatch(deleteBookThunk(bookId)),
  };
};

export default connect(mapState, mapDispatch)(BookContainer);
