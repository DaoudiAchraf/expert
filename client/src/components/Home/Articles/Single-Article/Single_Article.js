import React from 'react';
import './Single_Article.css';
import img from '../../../../images/diagnostic.png';
import { Link } from 'react-router-dom';

const Single_Article = () => {
    return (
       <Link to='/article'>
            <div className="single-article">
                <img src={img}/>
                <span id="article_date">Diagnostic  .  Aug 6, 2019 </span>
                <span id="article_title">Vidange</span>
            </div>
        </Link>
    )
}

export default Single_Article
