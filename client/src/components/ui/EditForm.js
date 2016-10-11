import React, { Component } from 'react';

export default class EditForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }
   render() {
     console.log(this.props);
     return(
       <div>
         <form onSubmit={this.handleSubmit}>
          <div>
            <label>title</label>
            <input defaultValue={this.props.post.title} />
          </div>
           <div>
             <label>content</label>
             <textarea defaultValue={this.props.post.content} />
           </div>
          <div>
            <label>category</label>
            <input defaultValue={this.props.post.category} />
          </div>
           <input type="submit" />
         </form>
       </div>
     )
   }
}
