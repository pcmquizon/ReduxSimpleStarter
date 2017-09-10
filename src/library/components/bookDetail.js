import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    if(!this.props.book) {
      return(
        <div className='d-inline-block align-top'>Select a book to start</div>
      );
    }

    return(
      <div className='d-inline-block align-top'>
        <h6>{this.props.book.title}</h6>
        <span>{this.props.book.pages} pages</span>
      </div>
    );
  };

};

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
};

export default connect(
  mapStateToProps,
  null
)(BookDetail);
