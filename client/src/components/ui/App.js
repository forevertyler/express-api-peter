import React, { Component } from 'react';
import { Link } from 'react-router';


export default class App extends Component {
  render() {
    let Styles = {
      hh: {
        height:'64px',
        width:'100%',
        backgroundColor:'#00bcd4',
        textAlign:'center',
        lineHeight:'64px'
      },
      link: {
        fontSize: '1.5em',
        textDecoration:'none',
        color:'#fff'

      }
    }

    return(
      <div>
        <header style = {Styles.hh}>
          <Link to='/' style={Styles.link}>BORN TO CODE</Link>
        </header>
        { this.props.children }
      </div>
    );
  }
}
