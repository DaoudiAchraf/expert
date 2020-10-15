import React from 'react';
import './History_Card.css';
import IMG from "../../../images/profile_img.jpg";
import moment from 'moment/moment';

const History_Card = props => {
    console.log(props.history);

    return (
        <div className="HistoryCard__Layout">
            <div className="historyCard__tag"><span>mon historique</span></div>
            {    props.history.length === 0 ? <h5 style={{textAlign:'center'}}>l'historique est vide</h5>:
                 props.history.map((item,index)=>
                    <div key={index} className="historyCard__item" >
                        <div>
                            <div className="item__info">   
                                <img src={IMG} />
                                <p>
                                    <span className="item__info-name">{item.name}</span>
                                    <span className="item__info-date">
                                         {moment(new Date(item.date)).format('DD MMMM YYYY')} - {moment(new Date(item.date)).format('HH.mm')}
                                    </span>
                                </p>
                            </div>
                                <span className="item__info-task">{item.type}</span>
                        </div>    
                        
                        <button className="historyCard__item-btn">
                            <span>Voir le rapport</span>
                            {/* <EyeOutlined /> */}
                        </button>
                    </div>)
            }
        </div>
    )
}

export default History_Card
