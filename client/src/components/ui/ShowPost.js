import React, { PropTypes } from 'react'
import axios from 'axios';
import Radium from 'radium';

class ShowPost extends React.Component {

  constructor(){
    super();
    this.state={
      wait:true,
      data:{}
    }
  }
  componentDidMount() {
    let id = this.props.params.id;
    let address = `http://localhost:3000/post/${id}`;
    axios.get(address).then(res => {
      console.log(res.data.post);
      this.setState({
        data: res.data.post,
        wait:false
      });
      // console.log(this.state.data);
    });
  }
  render () {
    let styles = {
      content: {
         position: 'relative',
         width: '100%',
         minHeight: '200px',
         maxWidth: '600px',
         margin: '30px auto',
         backgroundColor: '#fff',
         borderRadius: '5px',
         padding: '16px',
         boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
       },
       category: {
         position: 'absolute',
         top: '0',
         right: '0',
         padding: '4px 6px',
         color: '#fff',
         fontSize: '.8em',
         backgroundColor: '#ed5a5a',
         ':hover': {
           cursor: 'pointer',
           backgroundColor:'#f18585'
         }

       },
       title: {
         fontSize: '1.3em',
         paddingTop: '10px',
         paddingBottom: '20px',
         textAlign: 'center'
       },
       text: {
         fontSize: '1em',
         color: 'rgba(0,0,0,.8)'
       }
    }
    return(
      <div style={styles.content}>
        <div  style={styles.category}> { this.state.wait? '请稍等' : this.state.data.category }</div> <br />
        <div style={styles.title} > { this.state.wait? '请稍等' : this.state.data.title } </div><br />
        <div style={styles.text}> { this.state.wait? '请稍等' : this.state.data.content}</div>
      </div>
    )
  }
}

export default ShowPost;
