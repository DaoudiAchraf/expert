import React from 'react';
import { Badge } from 'antd';
import { ClockCircleOutlined ,BellOutlined} from '@ant-design/icons';

const BadgeC = (props) => {
    return (
     
          <div >
            
        
            <Badge count={5}>
              <i class="fas fa-bell fa-2x"></i>
            </Badge>

            
          

           
          </div>
    )
}



export default BadgeC
