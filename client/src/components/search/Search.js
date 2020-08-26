import React from 'react';
import './Search.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';


const Search = () => {
    return (
        <div className="search">

            <Input size="large" prefix={<SearchOutlined />} />
        </div>
    );
};


export default Search;
