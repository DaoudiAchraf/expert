import React from 'react';
import logo from './logo.svg';
import './RapportPdf.scss';

const RapportPdf = () => {
    return (
        <div className="rapportPdf">
            <div className="header">
                <img className="logo" src={logo} alt="" />
                <h1 className="title">Rapport de diagnostic</h1>
            </div>
            <div className="identificationC">
                <h3>Identification Controle</h3>
                <div className="details">
                    <h1 className="item1">wxwx</h1>
                    <h1 className="item2">skander</h1>
                    <h1 className="item3">skander</h1>
                </div>
            </div>
        </div>
    );
};

export default RapportPdf;
