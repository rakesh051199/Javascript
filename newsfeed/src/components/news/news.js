import React, { Component } from 'react';
import NewsSingle from "./newsList.js"
import Error from "./error.js";


class News extends  Component
{
    constructor(props)
    {
        super(props);
        this.state={
            news:[],
            error:false
        }
    }
    componentDidMount()
    {
     const url=`https://newsapi.org/v2/${this.props.news.key}?${this.props.news.value}&apiKey=9d9dab5fc8c245c4967603e0a15f1759`
      fetch(url)
      .then((response)=>{
          return response.json();
      })
    .then((data)=>{
        this.setState({
            news:data.articles
        })     
    }) 
    .catch((error)=>{
        this.setState({
            error:true
        })
    }); 
    }
    renderItems()
    {
        if (!this.state.error)
        {
        return this.state.news.map((item)=>{
            return <NewsSingle key={item.id} item={item}/>
        })
    }
    else{
        return <Error/>
    }
    }
    render()
    {
        return(
            <div className="row">
              {this.renderItems()}
            </div>
        )
    }
}
export default News;
