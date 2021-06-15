/*import {render} from "react-dom"
import React,{Component} from "react"
import {$,jQuery}  from 'jquery';


const booklist=[
  {"title":"happy days","author":"rakesh kokle","pages":250},
  {"title":"sad days","author":"rahul kokle","pages":350},
  {"title":"unhappy days","author":"rohan kokle","pages":280}
]
  //const React_version=React.version

  //console.log(React_version)

const Book=({title="no title provided",author="no author provided",pages=0,freeBookMark})=>
{
  return(
    <section>
      <h2>{title}</h2>
      <h3>written by:{author}</h3>
      <p>pages:{pages}</p>
      <p>free bookmark today:{freeBookMark?"yes":"no"}</p> 
    </section>
  )
}


class Library extends Component
{
   state={
     open:true,
  freeBookMark:true,
  data:[],
  loading:false
}
static defaultProps=
{
  books:[
    {title:"rakesh bio"}
  ]
}

//componentDidMount()
//{
  //this.setState({loading:true})
  //fetch("https://jsonplaceholder.typicode.com/posts")
  //.then(data=>data.json())
  //.then(data=>this.setState({data,loading:false}))
//}

toggledOpenClose=()=>
{this.setState(prevState=>({
  open:!prevState.open
}))
}


  render()
  {
    const {books}=this.props
    return(
          <>
          <h1>The library is {this.state.open?"OPEN":"FALSE"}</h1>
          {this.state.loading?
          "loading...."
          :
          <div>
            {this.state.data.map(post=>{
              return(
                <div>
                  <h1>The post of the week is</h1>
                  <h2>{post.title}</h2>
                  <h3>{post.body}</h3>
                </div>
              )
            })}
          </div>
          }    
          <button onClick={this.toggledOpenClose}>change</button>
          {books.map(
            (book,i)=>
            <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookMark={this.state.freeBookMark}/>
          )}
          </>
       )
    }
  }


  render(
    <Library/>,
    document.getElementById("root")
  )
  
  import React from "react"
  import ReactDOM from "react-dom"
  import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"
  import Home from "./components/home.js"
  import AboutUs from "./components/aboutus.js"
  import ContactUs from "./components/contactus.js"
  import Navigation from "./components/navigation.js"




 function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. 
          <Switch>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/users">
              <ContactUs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  

  ReactDOM.render(
    <App/>,
    document.getElementById("root")
  )
  */
  import React from "react";
  import ReactDOM from "react-dom"
  import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
  
  function App() {
    return (
      
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">Home</Link>
                <Link to="/users">Home</Link>


          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
    );
  }
  function Home() {
    return <h2>Home</h2>;
  }
  function About() {
    return <h2>About</h2>;
  }
  function Users() {
    return <h2>Users</h2>;
  }
  



  ReactDOM.render(
    <Router>
     <App/>
    </Router>
    ,document.getElementById("root")
  )
   
  