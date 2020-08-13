import React from 'react';
import "./pagination.scss";
import { Pagination } from 'antd';


const Paginations = () => (
    <Pagination defaultCurrent={1} total={1000} defaultPageSize={10} />
);


export default Paginations;
