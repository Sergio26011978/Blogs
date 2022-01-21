import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
super(props);
  this.state = {
    posts: []
  };
}
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(resp => resp.json())
    .then((json) => this.setState({posts: json}));
  }
  render() {
    const {posts} = this.state;
    return (
      <div className='container'>
        <div className='header'>
          <h1>Мой первый блог</h1>
        </div>
       <div className='blogs'>
          {posts.map((post) => (
           <div className='card' key={post.id}>
             <div className='card-header'>
               {post.title}
             </div>
              <div className='card-body'>
                {post.body}
              </div>
           </div> 
          ))}
       </div>
      </div>
    );
  }
}

export default App;
