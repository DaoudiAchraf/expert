import React,{useEffect} from 'react';
import { Modal, Button } from 'antd';
import Form_Editor from '../ProfileEditor_Modal/form_Editor/Form_Editor';

const ProfileEditor = props => {

  
      // const showModal = () => {
      //       props.setState({
      //         visible: true,
      //       });
      //     };
      
    
   
      const handleOk = () => {
        
           
            props.setState({
              ModalText: 'The modal will be closed after two seconds',
              confirmLoading: true,
            });
            setTimeout(() => {
              props.setState({
                visible: false,
                confirmLoading: false,
              });
            }, 2000);
          };
        
       const handleCancel = () => {
            console.log('Clicked cancel button');
            props.setState({
              visible: false,
            });
          };
        
            const { visible, confirmLoading, ModalText } = props.state;
            return (
              <>
                <Modal
                  title="Title"
                  visible={visible}
                  onOk={handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >

                  <Form_Editor />
                      </Modal >
              </>
            );
          
        }


export default ProfileEditor
