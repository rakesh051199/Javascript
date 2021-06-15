import React, { Component } from 'react';
import axios from "axios";
import SingleSide from "./singleside.js";
import Error from "./error.js";

class SideNews extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            sidenews:[],
            error:false
        }
    }
    componentDidMount()
    {
     const url=`https://newsapi.org/v2/${this.props.news.key}?${this.props.news.value}&apiKey=9d9dab5fc8c245c4967603e0a15f1759`
     axios.get(url)
     .then((response)=>{
         this.setState({
             sidenews:response.data.articles
         })
     })
     .catch((error)=>{this.setState(
         {error:true})
     })
    }  
    renderItems()
    {
        if (!this.state.error)
        {
        return this.state.sidenews.map((item)=>{
            return <SingleSide key={item.id} item={item}/>
        })
    }
    else{
        return <Error/>
    }
    }
    render()
    {
        return(
            <div>
              {this.renderItems()}
            </div>
        )
    }
}
export default SideNews;
