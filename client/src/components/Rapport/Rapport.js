
import React,{useState,forwardRef, useImperativeHandle} from 'react';
import { Modal} from 'antd';

import { Input } from 'antd';

const { TextArea } = Input;

const RapportModal = forwardRef((props, ref)=> {

  useImperativeHandle(ref, () => {
    return {
      updateVisiblity: updateVisiblity
    };
  });

   const[state,setState]  = useState( {
    visible: false,
  });


  const handleOk = () => {

      setState({
        visible: false

      });

  };

  const handleCancel = () => {
    
     setState({
      visible: false,
    });
  };


  const updateVisiblity = () => {
        //alert('hello');
        setState({visible:true});
  }

  return(

    <>
        <Modal
            title="Rédiger Votre Rapport"
            visible={state.visible}
            onOk={handleOk}
            onCancel={handleCancel}>

          <TextArea rows={4} />
        </Modal>

    </>

  )
});

export default RapportModal;