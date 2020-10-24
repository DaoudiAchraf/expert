import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import './Card.css';

export default function ImgMediaCard() {

  return (
    <div className="card-container">
    <Card  className="card">
      <div className="my-card">
        <div >
          <CardContent >
            <div id="my-card__contact">
                  <p >
                    Un de nos expert vous appelera dans moin de 24 h pour vous aider à localiser votre besoin.
                  </p>
            </div>
            
          </CardContent>
        </div>

        <div>
          <CardActions className="card-actions">
            <input placeholder="Enter your phone" className="input"></input>

            <button className="btn btn-primary">Demander assistance</button>

          </CardActions>
        </div>
      </div>
    </Card>
    </div>

  );
}
