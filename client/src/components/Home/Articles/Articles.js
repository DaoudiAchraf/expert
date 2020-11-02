import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';
import Single_Article from './Single-Article/Single_Article';

const Articles = () => {

    const articles = [];

    for (let index = 0; index < 8; index++)
        articles.push(<Single_Article/>);

    return (
        <div className="article__container"> 
            <div className="article__intro">
                <h2>Nos Conseils</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et.</p>
            </div>

            <div className="article__filter">
                <ul>
                    <li>Entretien</li>

                    <li>Reparation</li>

                    <li>recommandations</li>
                </ul>
            </div>

            <div className="articles">
                { articles }
            </div>

            <Link id="see_more"> See More </Link>
        </div>
    )
}

export default Articles
