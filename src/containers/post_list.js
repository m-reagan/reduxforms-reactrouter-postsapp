import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPostList() {
    return _.map(this.props.posts, post => <Link to={`posts/${post.id}`} key={post.id}> <li className="list-group-item">{post.title}</li></Link>);
  }
  render() {
    return (
      <div>
        <div className="text-sm-right"><Link className="btn btn-primary" to="/posts/new">Add Post</Link></div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPostList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);

