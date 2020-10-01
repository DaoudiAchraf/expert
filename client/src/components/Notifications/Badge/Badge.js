import React,{useEffect} from 'react';
import { Badge } from 'antd';
import { ClockCircleOutlined ,BellOutlined} from '@ant-design/icons';

const BadgeC = (props) => {
    return (
     
          <div >
                <Badge count={props.nbrNotifications}>
                  <i className="fas fa-bell fa-2x"></i>
                </Badge>
          </div>
    )
}

export default BadgeC
