import React from 'react';
import { Form, Input, Select, Radio, Button } from "antd";
import './FeuxPoluttion.scss';

const { Option } = Select;
const { TextArea } = Input;
const FeuxPollutionForm = props => {

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
    const dateFormat = 'YYYY-MM-DD';
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                const obj = { ...props.rapportData, 'feuxPollution': data }
                props.setRapportData(obj);
                console.log("data", props.rapportData);
                console.log(data);
                props.nextPage();
            }
        });

    };

    return (
        <div className='feuxPollution'>
            <Form id='feux-pollution' className="infoClientForm" onSubmit={handleSubmit}>
                <div className="item_with_label">
                    <Input.Group compact className="item">
                        <div className="item1">
                            <p>Optique avant : </p>
                            <div className="rightSide">
                                <Form.Item>
                                    {getFieldDecorator("optiqueAvant", {
                                        rules: [{ required: true, message: "Optique avant est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Moyenne état</Radio>
                                            <Radio value={3}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("optiqueAvantDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Feu Arrière : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("feuArriere", {
                                        rules: [{ required: true, message: "Feu Arrière est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Moyenne état</Radio>
                                            <Radio value={3}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("feuArriereDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Feux clignotants : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("feuxClignotants", {
                                        rules: [{ required: true, message: "Feux clignotants est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Moyenne état</Radio>
                                            <Radio value={3}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("feuxClignotantsDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Feux de jour : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("feuxDeJour", {
                                        rules: [{ required: true, message: "Feux de jour est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Moyenne état</Radio>
                                            <Radio value={3}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("feuxDeJourDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Feu de brouillard : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("feuDeBrouillard", {
                                        rules: [{ required: true, message: "Feu de brouillard est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Moyenne état</Radio>
                                            <Radio value={3}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("feuDeBrouillardDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Autres feux : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("autresFeux", {
                                        rules: [{ required: true, message: "Autres feux est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Moyenne état</Radio>
                                            <Radio value={3}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("autresFeuxDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Pollution résultant de l'essence ou du gasoil : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("pollutionResultantDeEssenceGasoil", {
                                        rules: [{ required: true, message: "Pollution résultant de l'essence ou du gasoil est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>pollution excessive</Radio>
                                            <Radio value={2}>pollution légère</Radio>
                                            <Radio value={3}>Bon Fonctionnement </Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("pollutionResultantDeEssenceGasoilDesc")(
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
const FeuxPollution = Form.create({ name: "normal_login" })(FeuxPollutionForm);
export default FeuxPollution;
