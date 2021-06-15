import React from 'react';

const NewsSingle = ({item}) => {
    return ( 
        <div className="card__wrap--outer">
    <div className="card__wrap--inner">
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={item.urlToImage} alt={item.title} className="responsive-img"/>
                    <span className="card-title">{item.source.name}</span>
                </div>
            <div className="card-content">
               <p>{item.title}</p>
            </div>
            <div className="card-action">
                <a href={item.url} target="_blank">Full Article</a>
            </div>
            </div>
        </div>
        </div>
        </div>
     );
}
 
export default NewsSingle;