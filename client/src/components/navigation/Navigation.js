import React from 'react';
import './Navigation.scss';
import Widjet from '../svg/widjet';
import List from '../svg/list';
import Side from '../svg/side';

const Navigation = () => {
    const handlClick = () => {
        console.log('clicked')
    }
    return (
        <div className="navigation">
            <div className="gray-color">Home / Map search</div>
            <div className="mr">
                <p>Layout</p>
                <div className="shape">
                    <List />
                    <Side />
                    <Widjet />
                </div>
            </div>
        </div>
    );
};


export default Navigation;
