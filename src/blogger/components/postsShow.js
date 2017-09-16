import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { APP_ROOT_URL } from '../config';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {

  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  };

  componentWillMount() {
    if(!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  };

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push(`${APP_ROOT_URL}/`);
    });
  };

  render() {
    const {
      post
    } = this.props;

    if(!post) {
      return(
        <div>Loading . . .</div>
      );
    }

    return(
      <div>
        <Link className="btn btn-lnk" to={`${APP_ROOT_URL}/`}>
          Back to index
        </Link>
        <button className="btn btn-danger float-right" onClick={this.onDeleteClick}>
          Delete
        </button>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id]
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: (id) => {
      dispatch(fetchPost(id))
    },
    deletePost: deletePost,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsShow);
