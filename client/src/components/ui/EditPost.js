import React, { Component } from 'react';
import axios from 'axios';
import Settings from '../Settings';
import EditForm from './EditForm';
import isEmpty from 'lodash/fp/isEmpty';



export default class PostList extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    var id = this.props.params.id;
    console.log(id);
    axios.get(`${Settings.host}/post/${id}`).then(res => {
      this.setState({
        post: res.data.post
        // 10s 后得到 this.state.post 不为空
      });
      console.log(res);
    });
  }
  publishPost(data) {
    //  REST
    var id = this.props.params.id;
    axios.put(`${Settings.host}/posts/${id}`).then(res => {
      console.log(res.data);
    });
  }
  render(){
    return(
      <div>
        {!isEmpty(this.state.post) ? <EditForm post={this.state.post} publishPost={this.publishPost.bind(this)}/> : "w"}
      </div>
    )
  }
}
