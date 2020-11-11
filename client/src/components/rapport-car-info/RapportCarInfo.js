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
                const obj = { ...props.rapportData, 'carInfo': data }
                props.setRapportData(obj);
                console.log("data", props.rapportData);
                console.log(data);
                props.nextPage();
            }
        });
    };

    return (
        <div className='carInfo'>
            <Form id='car-info' className="infoClientForm" onSubmit={handleSubmit}>
                <div className="item_with_label">
                    <Input.Group compact className="item">
                        <div className="item1">
                            <p>Numéro de châssis : </p>
                            <div className="rightSide">
                                <Form.Item>
                                    {getFieldDecorator("numeroChassis", {
                                        rules: [{ required: true, message: "Numéro de châssis est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={"non conforme"}>Non conforme</Radio>
                                            <Radio value={"corrosion"}>Corrosion</Radio>
                                            <Radio value={"Conforme"}>Conforme</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("numeroChassisDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Plaque du constructeur : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("plaqueCon", {
                                        rules: [{ required: true, message: "Plaque du constructeur est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={"non conforme"}>Non conforme</Radio>
                                            <Radio value={"conforme"}>Conforme</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("plaqueConDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Certificat d'immatriculation : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("certificatImma", {
                                        rules: [{ required: true, message: "Certificat d'immatriculation est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={"non conforme"}>Non conforme</Radio>
                                            <Radio value={"conforme"}>Conforme</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("certificatImmaDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Plaque d'immatriculation : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("plaqueImma", {
                                        rules: [{ required: true, message: "Plaque d'immatriculation est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={"non conforme"}>Non conforme</Radio>
                                            <Radio value={"conforme"}>Conforme</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("plaqueImmaDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>


                    </Input.Group>
                </div>

            </Form>
        </div>
    );
};
const RapportCarInfo = Form.create({ name: "normal_login" })(RapportCarInfoForm);
export default RapportCarInfo;
