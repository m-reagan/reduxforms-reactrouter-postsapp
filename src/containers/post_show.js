import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';


class PostShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onDelete() {
    this.props.deletePost(this.props.match.params.id,() => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading .. </div>;
    }
    return (
      <div>
        <div className="text-sm-right"><button className="btn btn-danger" onClick={this.onDelete.bind(this)}>Delete Post</button></div>
        <Link to="/">Back to posts</Link>
        <h3>Title:</h3>
        {post.title}
        <h3>Category:</h3>
        {post.categories}
        <h3>Content:</h3>
        {post.content}
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
  return {
    post: state.posts[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
