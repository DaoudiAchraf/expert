import React from 'react';
import "./sortBy.scss";
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';


const sortBy = () => {
    function handleMenuClick(e) {
        message.success('Click on menu item.');
        console.log('click', e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                1st menu item
          </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                2nd menu item
          </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
          </Menu.Item>
        </Menu>
    );
    return (
        <div className="sort">
            <div className="title">
                <span className="nb-expert">202</span>
                <h1>Expert</h1>
            </div>
            <div className="sortby">
                <Dropdown overlay={menu}>
                    <Button>
                        <p>SortBy</p>
                        <div className="btn-flex">
                            <CaretUpOutlined />
                            <CaretDownOutlined />
                        </div>

                    </Button>
                </Dropdown>
            </div>
        </div>
    );
};


export default sortBy;
