import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.renderList = this.renderList.bind(this);
    this.selectBook = this.selectBook.bind(this);
  };

  getInitialState() {
    return {};
  };

  selectBook(book) {
    this.props.selectBook(book);
  }

  renderList() {
    return this.props.books.map((book) => {
      return(
        <li key={book.title}
            className="list-group-item"
            onClick={ () => this.selectBook(book) }
        >
            {book.title}
        </li>
      );
    })
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
};

// redux state to react props
function mapStateToProps(state, ownProps) {
  return {
    books: state.books,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
  // return {
  //   selectBook: (book) => {
  //     dispatch(selectBook(book))
  //   }
  // };
};

// container
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
