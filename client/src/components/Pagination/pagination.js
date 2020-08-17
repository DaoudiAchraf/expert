import React from 'react';
import "./pagination.scss";
import { Pagination } from 'antd';


const Paginations = () => (
    <Pagination defaultCurrent={6} total={500} />
);


export default Paginations;
