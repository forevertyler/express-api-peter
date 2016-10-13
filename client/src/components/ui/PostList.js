import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import { Link } from 'react-router';
import Settings from '../Settings'

export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
        textAlign: 'center'
      },
      title: {
        fontSize: '1.2em'
      },
      link:{
        width:'50px',
        display:'block',
        textAlign:'center',
        textDecoration: 'none',
        backgroundColor:'#00bcd4',
        color:'#fff',
        margin:'20px auto',
        padding:'5px 10px',
        borderRadius:'5px',
      },
      check:{
        width:'50px',
        display:'block',
        textAlign:'center',
        textDecoration: 'none',
        backgroundColor:'#00bcd4',
        color:'#fff',
        margin:'10px 0 0 5px',
        padding:'5px 10px',
        borderRadius:'5px',
        float:"left"
      },
      edit:{
        width:'50px',
        display:'block',
        textAlign:'center',
        textDecoration: 'none',
        backgroundColor:'#00bcd4',
        color:'#fff',
        margin:'10px auto',
        padding:'5px 10px',
        borderRadius:'5px',
      },
      delete:{
        clear:'both',
        width:'50px',
        display:'inline-block',
        // textAlign:'center',
        textDecoration: 'none',
        backgroundColor:'#00bcd4',
        color:'#fff',
        margin:'-45px 5px',
        padding:'5px 10px',
        borderRadius:'5px',
        float:"right"

      }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      console.log(this.state.posts);
    });
  }
  filterPosts(id){
    // this.state.posts
    alert(id)
    
  }
  handleClick(value) {
    // alert(value);
    // REST
    axios.delete(`${Settings.host}/posts/${value}`).then(res => {
      console.log('filering..!');
    //this.filterPosts(value);
    //筛选已经删除的这个　post
    //修改　this.state.posts 里面删除一个　Post
    this.filterPosts(value)
    })
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
          <Link to={`/posts/${post._id}`} style={styles.check}>CHECK</Link>
          <Link to={`/posts/${post._id}/edit`} style={styles.edit}>编辑</Link>
          <Link to={``} style={styles.delete} onClick={this.handleClick.bind(this,post._id)}>删除</Link>

        </div>
      )
    }, this.state.posts);
    return(
      <div>
        <Link to='/write' style={styles.link}>写文章</Link>
        { postList }
      </div>
    );
  }
}
