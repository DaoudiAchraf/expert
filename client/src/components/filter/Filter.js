import React from 'react';
import './Filter.scss';
import { Select, Input } from 'antd';


const Filter = () => {
    return (
        <div className="filter">
            <p>Filter Results</p>
            <div className="mb-18 upper-case">
                <h4>Localisation</h4>
                <Input style={{ width: 300, height: 37.6 }} placeholder="E.g Fouchana" className="select" />
            </div>
            <div className="mb-18 upper-case">
                <h4>type expert</h4>
                <Select size='large' defaultValue="Tolier" style={{ width: 300 }} className="select">
                </Select>
            </div>
            <div className="mb-18 upper-case">
                <h4>marque voiture</h4>
                <Select size='large' defaultValue="Obstercician/Gynecol" style={{ width: 300 }} className="select">
                </Select>
            </div>




        </div>
    );
};


export default Filter;
