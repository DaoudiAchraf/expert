import React from 'react';
import { Form, Input, Radio } from "antd";
import './Electricite.scss';
const { TextArea } = Input;
const ElectriciteForm = props => {
    const { getFieldDecorator } = props.form;
    const dateFormat = 'YYYY-MM-DD';
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                const obj = { ...props.rapportData, 'electricite': data }
                props.setRapportData(obj);
                console.log("data", props.rapportData);
                console.log(data);
                props.nextPage();
            }
        });
    };
    return (
        <div className='Electricite'>
            <Form id='electricite' className="infoClientForm" onSubmit={handleSubmit}>
                <div className="item_with_label">
                    <Input.Group compact className="item">
                        <div className="item1">
                            <p>Compteur de vitesse : </p>
                            <div className="rightSide">
                                <Form.Item>
                                    {getFieldDecorator("compteurVitesse", {
                                        rules: [{ required: true, message: "Compteur de vitesse est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Non conforme</Radio>
                                            <Radio value={2}>Conforme</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("compteurVitesseDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Tableau de bord : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("tableauDord", {
                                        rules: [{ required: true, message: "Tableau de bord est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Défaillance</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("tableauDordDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Électronique automobile : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("electroniqueAutomobile", {
                                        rules: [{ required: true, message: "Électronique automobile est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Défaillance</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("electroniqueAutomobileDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Autres équipements spéciaux : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("equipementsSpeciaux", {
                                        rules: [{ required: true, message: "Autres équipements spéciaux est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Défaillance</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("equipementsSpeciauxDesc")(
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
const Electricite = Form.create({ name: "normal_login" })(ElectriciteForm);
export default Electricite;
