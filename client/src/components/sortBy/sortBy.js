import React from 'react';
import "./sortBy.scss";
import { Menu, Dropdown, Button, message } from 'antd';
import { UserOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';


const sortBy = props => {
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
                <span className="nb-expert">{props.resultsCount}</span>
                <h1>Expert</h1>
            </div>
            <div className="sortby">
                {
                    props.show ?
                        <div className="specialite">
                            <h6>Specialité :</h6>
                            <Dropdown className="tous" overlay={menu}>
                                <Button>
                                    <h6>Tous</h6>
                                    <div className="btn-flex">
                                        <CaretUpOutlined />
                                        <CaretDownOutlined />
                                    </div>

                                </Button>
                            </Dropdown>
                        </div>
                        :
                        null
                }


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
