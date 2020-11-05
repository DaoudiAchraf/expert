import React, { useEffect, useState } from "react";
import { Form, Icon, Input, Button, message } from "antd";
import { useHistory } from 'react-router-dom';
import "./signin-form.scss";

const SigninForm = props => {
  const { getFieldDecorator } = props.form;
  const history = useHistory();
  const [usercon, setUsercon] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    props.form.validateFields(async (err, data) => {
      if (!err) {
        console.log(data);
        props.signin(data, (data) => {
          props.setShowmodel(false);
          props.form.resetFields();
          message.success('Successfully login in');
          if (data.user) {
            data.user.role == 'expert' && history.push('/profiles');
          }
        }, (err) => {
          message.error(err.message);
          // props.form.resetFields();
        })
        // .then(res => {
        // props.setShowmodel(false);
        // props.form.resetFields();
        // message.success('Successfully login in');
        // console.log(props.user);
        // if (props.user) {
        //   props.user.role == 'expert' && history.push('/profiles');
        // }
        // // })
        // // .catch(err => {
        // message.error(err.message);
        // props.form.resetFields();
        // console.log(err);
        // // });
      }
    });
  };

  return (
    <Form className="signin-form" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator("mail", {
          rules: [
            {
              required: true,
              message: "Please input your email!"
            },
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
          ]
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="submit-button">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedSigninForm = Form.create({ name: "normal_login" })(SigninForm);

export default WrappedSigninForm;
