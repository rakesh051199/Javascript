import React, { Component } from 'react';
import './App.css';
import SideNews from "./news/sidenews.js";
import News from "./news/news.js"

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      news1:{
        key:"top-headlines",
        value:"sources=techcrunch"
      },
      news2:{
        key:"everything",
        value:"domains=wsj.com"
      },
      news3:{
        key:"everything",
        value:"domains=comicbookmovie.com&language=en"
      }
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
          <div className="nav-wrapper indigo lighten-4">
          <a href="#" className="brand-logo center">MyFeed</a>
          </div>
          </nav>
        </div>
          <div className="row">
            <div className="col s8">
            <News news={this.state.news1}/>
            <News news={this.state.news2}/>
            </div>
            <div className="col s4">
              <SideNews news={this.state.news3}/>
            </div>
          </div>
        </div>    
     
    );
  }
}

export default App;
