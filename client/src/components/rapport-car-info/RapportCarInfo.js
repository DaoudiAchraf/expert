import React from 'react';
import { Form, Input, DatePicker, Select, Radio, Button } from "antd";
import './RapportCarInfo.scss';

const { Option } = Select;
const { TextArea } = Input;
const RapportCarInfoForm = props => {

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
    const dateFormat = 'YYYY-MM-DD';
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                console.log(data);
            }
        });

    };

    return (
        <div className='carInfo'>
            <Form id='car-info' className="infoClientForm" onSubmit={handleSubmit}>
                <div className="item_with_label">
                    <p>elaazeal</p>
                    <Input.Group compact className="item">
                        <Form.Item hasFeedback>
                            {getFieldDecorator("carower", {
                                rules: [{ required: true, message: "Propriétaire de véhicule est obligatoire!" }]
                            })(
                                <Radio.Group>
                                    <Radio value={1}>A</Radio>
                                    <Radio value={2}>B</Radio>
                                    <Radio value={3}>C</Radio>
                                    <Radio value={4}>D</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        {/* <Form.Item hasFeedback label="Propriétaire de véhicule">
                            {getFieldDecorator("carower1")(
                                <TextArea rows={4} />
                            )}
                        </Form.Item> */}
                    </Input.Group>
                </div>

            </Form>
        </div>
    );
};
const RapportCarInfo = Form.create({ name: "normal_login" })(RapportCarInfoForm);
export default RapportCarInfo;
