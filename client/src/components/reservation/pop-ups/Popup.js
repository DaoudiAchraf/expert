
import React,{forwardRef, useImperativeHandle} from 'react';

import { notification} from 'antd';
import { CheckCircleTwoTone} from '@ant-design/icons';

const Popup = forwardRef((props, ref) => {


    const openNotification = placement => {
        
    notification.info({
        message: `Votre réservation a eté effectuée avec succès . `,
        description:
        "",
        placement,
        icon: <CheckCircleTwoTone />
    });
    };


    useImperativeHandle(ref, () => {
        return {
            openNotification: openNotification
        };
      });

});

export default Popup
