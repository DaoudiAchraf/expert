import React from 'react';
import './ExpertPage.scss';

import Navigation from '../../components/navigation/Navigation';
import SortBy from '../../components/sortBy/sortBy';
import Filter from '../../components/filter/Filter';
import ExpertCard from '../../components/expertCard/expertCard';
import Paginations from '../../components/Pagination/pagination';


const ExpertPage = () => {
    return (
        <div className="expert-page">
            <Navigation />
            <div className="main">
                <Filter />
                <div className="card">
                    <SortBy />
                    <div className="experts">
                        <ExpertCard />
                        <ExpertCard />
                        <ExpertCard />
                        <ExpertCard />
                        <ExpertCard />
                    </div>
                    <div className="pagination">
                        <Paginations />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ExpertPage;
