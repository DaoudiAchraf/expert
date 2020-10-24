import React from 'react';
import { Form, Input, Radio } from "antd";
import './InterieursVoiture.scss';
const { TextArea } = Input;
const InterieursVoitureForm = props => {
    const { getFieldDecorator } = props.form;
    const dateFormat = 'YYYY-MM-DD';
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                const obj = { ...props.rapportData, 'interieurs-voitureForm': data }
                props.setRapportData(obj);
                console.log("data", props.rapportData);
                console.log(data);
                props.nextPage();
            }
        });
    };
    return (
        <div className='InterieursVoiture'>
            <Form id='interieurs-voitureForm' className="infoClientForm" onSubmit={handleSubmit}>
                <div className="item_with_label">
                    <Input.Group compact className="item">
                        <div className="item1">
                            <p>Ceinture de sécurité : </p>
                            <div className="rightSide">
                                <Form.Item>
                                    {getFieldDecorator("ceintureSecurite", {
                                        rules: [{ required: true, message: "Ceinture de sécurité est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Défaillance </Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("ceintureSecuriteDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Système d’Airbag : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("systemeAirbag", {
                                        rules: [{ required: true, message: "Système d’Airbag est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Défaillance </Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("systemeAirbagDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Siège et accessoires : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("siegeAccessoires", {
                                        rules: [{ required: true, message: "Siège et accessoires est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("siegeAccessoiresDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Éclairage Intérieur : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("eclairageInterieur", {
                                        rules: [{ required: true, message: "Éclairage Intérieur est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Défaillance </Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("eclairageInterieurDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Rétroviseurs intérieurs : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("retroviseursInterieurs", {
                                        rules: [{ required: true, message: "Rétroviseurs intérieurs est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("retroviseursInterieursDesc")(
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
const InterieursVoiture = Form.create({ name: "normal_login" })(InterieursVoitureForm);
export default InterieursVoiture;
