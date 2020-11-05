import React from 'react';
import './Single_Article.css';
import img from '../../../../images/diagnostic.png';

const Single_Article = () => {
    return (
        <div className="single-article">
            <img src={img}/>
            <span id="article_date">Diagnostic  .  Aug 6, 2019 </span>
            <span id="article_title">Vidange</span>
        </div>
    )
}

export default Single_Article
