import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts';


class AddPostForm extends Component {

  constructor(props) {
    super(props);
    this.state = { isValid: false, post: { title: "", body: "", author: "", image: "" } };
  }

  checkValidity() {
    this.setState({ isValid:
      this.state.post.title.length > 0 && this.state.post.body.length > 0 && this.state.post.author.length > 0 && this.state.post.image.length > 0 });
  }

  formInputHandler = (e) => {
    this.setState({ post: Object.assign({}, this.state.post, {[e.target.name]: e.target.value }) });
    this.checkValidity();
  }

  clearFormFields = () => {
    document.getElementById("title-field").value = "";
    document.getElementById("body-field").value = "";
    document.getElementById("author-field").value = "";
    document.getElementById("image-field").value = "";
    this.setState({ isValid: false, post: Object.assign({}, this.state.post, {title: "", body: "", author: "", image: "" }) });
  }

  submitAction = (e) => {
    e.preventDefault();
    this.props.createPost(this.state.post);
    this.clearFormFields();
  }

  render() {
    return (
      <Row>
        <Col sm="10">
          <Form onSubmit={this.submitAction} onChange={(e) => this.formInputHandler(e)} >
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input type="text" name="title" id="title-field" />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input type="text" name="body" id="body-field" />
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input type="text" name="author" id="author-field" />
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input type="text" name="image" id="image-field" />
            </FormGroup>
            <Button type="submit" disabled={!this.state.isValid}>Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}


// actionCreator kommen hier rein
// "passes Action-Creators to a Component"
// "-> makes Action-Creators available to Component via props"
const mapDispatchToProps = dispatch => bindActionCreators({
  createPost
}, dispatch)

// "connect is a higher order Component"
// "-> wraps your Component in a redux-aware Component"
// "it wraps your component with another component that knows about the store"
export default connect(
  null,
  mapDispatchToProps
)(AddPostForm)
