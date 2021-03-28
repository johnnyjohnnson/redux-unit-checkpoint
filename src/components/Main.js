import React, { Component } from 'react'
import AddPostForm from './AddPostForm'
import Post from './Post'
import FilterPosts from './FilterPosts'
import { Container, Row, Col, Button } from 'reactstrap'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/posts';
import { fetchComments } from '../actions/comments';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { AddPostFormVisibility: true }
  }

  toggleAddPostFormVisibility = () => {
    this.setState({AddPostFormVisibility: !this.state.AddPostFormVisibility});
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
  }

  render() {

    const copyOfPosts = this.props.posts.map(post => {return {...post, comments: this.props.comments.filter(comment => comment.post_id === post.id)}});
    const sortedPosts = copyOfPosts.sort(function(a, b) {return b.votes - a.votes});

    return (
      <Container className="mt-4">
        <Row>
          <Col sm={{size: 8, offset: 1}}>
            <FilterPosts />
          </Col>
          <Col sm="2">
            <Button color="secondary" onClick={this.toggleAddPostFormVisibility}>Add Post</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={{size: 11, offset: 1}}>
            {this.state.AddPostFormVisibility && <AddPostForm />}
          </Col>
        </Row>
        <Row>
          <Col className="pr-0" sm={{size: 9, offset: 1}}>
            {sortedPosts.map( (post, i) => {return <Post key={i} post={post}/>})}
          </Col>
        </Row>
      </Container>
    )
  }
}

// 1) it makes certain parts of the state available to the component via props
// 2) it re-renders the component whenever these parts of the state change
const mapStateToProps = state => {
  const {postsReducer, commentsReducer, visibilityReducer} = state;
  return {
    posts: postsReducer.posts,
    comments: commentsReducer.comments
  }
};

// actionCreator kommen hier rein
// "passes Action-Creators to a Component"
// "-> makes Action-Creators available to Component via props"
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts, fetchComments
}, dispatch)

// "connect is a higher order Component"
// "-> wraps your Component in a redux-aware Component"
// "it wraps your component with another component that knows about the store"
export default connect(mapStateToProps, mapDispatchToProps)(Main);

