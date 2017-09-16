import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { APP_ROOT_URL } from '../config';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  };

  componentDidMount() {
    this.props.fetchPosts();
  };

  renderPosts() {
    return _.map(this.props.posts, (post) => {
      return(
        <Link to={`${APP_ROOT_URL}/posts/${post.id}`} key={post.id}>
          <li className="list-group-item">{post.title}</li>
        </Link>
      );
    });
  };

  render() {
    return(
      <div>
        <div className="text-sm-right">
          <Link className="btn btn-primary" to={`${APP_ROOT_URL}/posts/new`}>
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
        {this.renderPosts()}
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsIndex);
