import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'
import { votePost } from '../actions/posts'
import { submitComment } from '../actions/comments'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {commentVisibility: true}
  }

  toggleCommentVisibility = () => {
    this.setState({commentVisibility: !this.state.commentVisibility})
  }

  render() {

    const countComments = this.props.post.comments.length;
    const correctlyPluralized = countComments === 1 ? " comment" : " comments";

    return (
      <Row className="mt-3">
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src={this.props.post.img_url}//"https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                {this.props.post.title} | <FaArrowUp onClick={() => this.props.votePost(true, this.props.post.id)} /> {this.props.post.votes} {this.props.post.votes > 0 && <FaArrowDown onClick={() => this.props.votePost(false, this.props.post.id)} />}
              </CardTitle>
              <CardSubtitle>{this.props.post.author}</CardSubtitle>
              <CardText>
                {this.props.post.content}
              </CardText>
                <hr />
                a few seconds ago | <FaComment/> {countComments + correctlyPluralized} <Label onClick={this.toggleCommentVisibility}> | {this.state.commentVisibility ? "hide" : "show"} CommentSection </Label>
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" />
                  </FormGroup>
                  <Button onClick={() => this.props.submitComment(document.getElementById("comment-field").value, this.props.post.id)}>Submit</Button>
                </Form>
                {this.state.commentVisibility && <ul className="mt-2">
                  {this.props.post.comments.map(
                    (comment, i) => {
                      return <li key={i}>{comment.content}</li>
                    }
                  )}
                </ul>}
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}


// actionCreator kommen hier rein
// "passes Action-Creators to a Component"
// "-> makes Action-Creators available to Component via props"
const mapDispatchToProps = dispatch => bindActionCreators({
  votePost, submitComment
}, dispatch);

// "connect is a higher order Component"
// "-> wraps your Component in a redux-aware Component"
// "it wraps your component with another component that knows about the store"
export default connect(null, mapDispatchToProps)(Post);
