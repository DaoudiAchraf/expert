import React from 'react';
import './Search.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';


const Search = props => {
    const handlChange = e => {
        let objs = props.profiles;
        console.log(e.target.value);
        props.setSearch(e.target.value);
        const res = objs.filter(p => {
            console.log(p.user.login.includes(e.target.value))
            if (p.user.login.includes(e.target.value)) return p;
        })
        console.log(res);
        props.setProfilesdata(res)
        console.log(props.profilesdata)
    }
    return (
        <div className="search">
            <Input onChange={handlChange} size="large" prefix={<SearchOutlined />} />
        </div>
    );
};


export default Search;
