import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { filterPosts } from '../actions/posts';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class FilterPosts extends Component {
  render () {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">Filter by title:</Label>
          <Input type="text" name="email" id="filter-field" onChange={(e) => this.props.filterPosts(e.target.value)}/>
        </FormGroup>
      </Form>
    )
  }
}

// actionCreator kommen hier rein
// "passes Action-Creators to a Component"
// "-> makes Action-Creators available to Component via props"
const mapDispatchToProps = dispatch => bindActionCreators({
  filterPosts
}, dispatch);

// "connect is a higher order Component"
// "-> wraps your Component in a redux-aware Component"
// "it wraps your component with another component that knows about the store"
export default connect(/*mapStateToProps*/null, mapDispatchToProps)(FilterPosts);
