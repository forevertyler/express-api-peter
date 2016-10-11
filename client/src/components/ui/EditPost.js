import React, { Component } from 'react';
import axios from 'axios';
import EditForm from './EditForm';
import Settings from '../Settings';
import isEmpty from 'lodash/fp/isEmpty';

export default class EditPost extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    }
  }
  componentDidMount() {
    var id = this.props.params.id;
    console.log('ppppppppppppp' + id);
    axios.get(`${Settings.host}/post/${id}`).then(res => {
      console.log(res);
      this.setState({
        post: res.data.post
      });
      console.log(res);
    });
  }
  render(){
    return(
      <div>
        {isEmpty(this.state.post) ? "wating" : <EditForm post={this.state.post} /> }
      </div>
    )
  }
}
