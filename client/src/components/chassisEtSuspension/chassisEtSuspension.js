import React from 'react';
import { Form, Input, Radio } from "antd";
import './chassisEtSuspension.scss';
const { TextArea } = Input;
const ChassisEtSusspensionForm = props => {
    const { getFieldDecorator } = props.form;
    const dateFormat = 'YYYY-MM-DD';
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                const obj = { ...props.rapportData, 'chassis-susspension': data }
                props.setRapportData(obj);
                console.log("data", props.rapportData);
                console.log(data);
                props.nextPage();
            }
        });
    };
    return (
        <div className='ChassisEtSusspension'>
            <Form id='chassis-susspension' className="infoClientForm" onSubmit={handleSubmit}>
                <div className="item_with_label">
                    <Input.Group compact className="item">
                        <div className="item1">
                            <p>Châssis : </p>
                            <div className="rightSide">
                                <Form.Item>
                                    {getFieldDecorator("chassis", {
                                        rules: [{ required: true, message: "Châssis est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvaise fixation</Radio>
                                            <Radio value={2}>Corrosion</Radio>
                                            <Radio value={3}>Déformation ou réparation</Radio>
                                            <Radio value={4}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("chassisDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Circuit d'échappement : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("circuitEchappement", {
                                        rules: [{ required: true, message: "Circuit d'échappement est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvaise fixation</Radio>
                                            <Radio value={2}>Fuite</Radio>
                                            <Radio value={3}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("circuitEchappementDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Pare chocs : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("pareChocs", {
                                        rules: [{ required: true, message: "Pare chocs est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("pareChocsDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Suspension : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("suspension", {
                                        rules: [{ required: true, message: "Suspension est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("suspensionDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Amortisseur : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("amortisseur", {
                                        rules: [{ required: true, message: "Amortisseur est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("amortisseurDesc")(
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
const ChassisEtSusspension = Form.create({ name: "normal_login" })(ChassisEtSusspensionForm);
export default ChassisEtSusspension;
