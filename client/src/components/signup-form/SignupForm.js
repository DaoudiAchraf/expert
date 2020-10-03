import React, { useState } from "react";
import { Form, Icon, Input, Button } from "antd";
import NumericInput from '../Inputnum/InputNum';
// import {Input} from 'antd2';

import "./signup-form.scss";

const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const SignupForm = props => {
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [value, setValue] = useState();
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, data) => {
      if (!err) {
        // props.setData(data);
        //props.signup(data);
        props.signupExpert(data)
        props.setNextstep(props.nextstep + 1);
        props.refsigntupexpert.current.next();
        props.handle();

      }
    });

  };

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(['password_confirmation'], { force: true });
    }
    callback();
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const handleConfirmBlur = e => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  const onChange = value => {
    setValue(value);
  };
  const handleNumberChange = e => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    triggerChange({ number });
  };

  const triggerChange = changedValue => {
    const { onChange, value } = props;
    if (onChange) {
      onChange({
        ...value,
        ...changedValue,
      });
    }
  };
  return (
    <Form className="signup-form" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator("login", {
          rules: [{ required: true, message: "Please input your name!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Name"
          />
        )}
      </Form.Item>

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
        {getFieldDecorator("phone", {
          rules: [
            {
              required: true,
              message: "Please input your Phone!"
            },
            {
              len: 8,
              message: "Must be 8 caracter"
            },
          ]
        })(
          <NumericInput onChange={onChange} />
        )}
      </Form.Item>

      <Form.Item hasFeedback>
        {getFieldDecorator("password", {
          rules: [
            {
              required: true, message: "Please input your Password!"
            },
            {
              validator: validateToNextPassword,
            },
          ]
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item hasFeedback>
        {getFieldDecorator("password_confirmation", {
          rules: [

            {

              required: true,
              message: "Please input your Password confirmation!"
            },
            {
              validator: compareToFirstPassword,
            },

          ]
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password confirmation"
            onBlur={handleConfirmBlur}
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button disabled={hasErrors(getFieldsError())} type="primary" htmlType="submit" className="submit-button">
          {!props.signupexpert ? "Sign up" : "Next"}
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedSignupForm = Form.create({ name: "normal_login" })(SignupForm);

export default WrappedSignupForm;
