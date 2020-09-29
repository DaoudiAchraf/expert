import React from 'react';
import './History_Card.css';
import IMG from "../../../images/profile_img.jpg";
import {EyeOutlined} from '@ant-design/icons';


const History_Card = props => {
    
    // const {name,date,task} = props.history;

    return (
        <div className="HistoryCard__Layout">
            <div className="historyCard__tag"><span>mon historique</span></div>
            <div className="historyCard__item" >
                <div>
                    <div className="item__info">   
                        <img src={IMG} />
                        <p>
                            <span className="item__info-name">LAMJED MECANIQUE</span>
                            <span className="item__info-date">17 septembre 2020 - 10:30</span>
                        </p>
                    </div>
                        <span className="item__info-task">diagnostique de voiture megane coupé</span>
                </div>    
                
                <button className="historyCard__item-btn">
                    <span>Voir le rapport</span>
                    {/* <EyeOutlined /> */}
                </button>
            </div>

            <div className="historyCard__item" >
                <div>
                    <div className="item__info">   
                        <img src={IMG} />
                        <p>
                            <span className="item__info-name">Hammadi Auto</span>
                            <span className="item__info-date">17 septembre 2020 - 10:30</span>
                        </p>
                    </div>
                        <span className="item__info-task">diagnostique de voiture megane coupé</span>
                </div>    
                
                <button className="historyCard__item-btn">
                    Voir le rapport
                    {/* <EyeOutlined /> */}
                </button>
            </div>

        </div>
    )
}



export default History_Card
