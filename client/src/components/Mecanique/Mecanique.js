import React from 'react';
import { Form, Input, Radio } from "antd";
import './Mecanique.scss';
const { TextArea } = Input;
const MecaniqueForm = props => {
    const { getFieldDecorator } = props.form;
    const dateFormat = 'YYYY-MM-DD';
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                const obj = { ...props.rapportData, 'mecanique': data }
                props.setRapportData(obj);
                console.log("data", props.rapportData);
                console.log(data);
                props.nextPage();
            }
        });
    };
    return (
        <div className='Mecanique'>
            <Form id='mecanique' className="infoClientForm" onSubmit={handleSubmit}>
                <div className="item_with_label">
                    <Input.Group compact className="item">
                        <div className="item1">
                            <p>Freinage et hydraulique de freinage : </p>
                            <div className="rightSide">
                                <Form.Item>
                                    {getFieldDecorator("freinage", {
                                        rules: [{ required: true, message: "Freinage est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Défaillance</Radio>
                                            <Radio value={2}>Fuite</Radio>
                                            <Radio value={3}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("freinageDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Boîte de vitesse : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("boiteVitesse", {
                                        rules: [{ required: true, message: "Boîte de vitesse est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvaise fixation</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("boiteVitesseDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Système d'embrayage : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("systemeEmbrayage", {
                                        rules: [{ required: true, message: "Système d'embrayage est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("systemeEmbrayageDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Arbre de transmission et joints : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("arbreTransmission", {
                                        rules: [{ required: true, message: "Arbre de transmission et joints est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("arbreTransmissionDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Système de refroidissement : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("systemeRefroidissement", {
                                        rules: [{ required: true, message: "Système de refroidissement est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("systemeRefroidissementDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Moteur : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("moteur", {
                                        rules: [{ required: true, message: "Moteur est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Défaillance</Radio>
                                            <Radio value={2}>Fuite moteur</Radio>
                                            <Radio value={3}>Moyenne état</Radio>
                                            <Radio value={4}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("moteurDesc")(
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
const Mecanique = Form.create({ name: "normal_login" })(MecaniqueForm);
export default Mecanique;
