import React from 'react';
import { Form, Input, Radio } from "antd";
import './RoueDirection.scss';
const { TextArea } = Input;
const RoueDirectionForm = props => {
    const { getFieldDecorator } = props.form;
    const dateFormat = 'YYYY-MM-DD';
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                const obj = { ...props.rapportData, 'roue-direction': data }
                props.setRapportData(obj);
                console.log("data", props.rapportData);
                console.log(data);
                props.nextPage();
            }
        });
    };
    return (
        <div className='RoueDirection'>
            <Form id='roue-direction' className="infoClientForm" onSubmit={handleSubmit}>
                <div className="item_with_label">
                    <Input.Group compact className="item">
                        <div className="item1">
                            <p>Volant de direction  : </p>
                            <div className="rightSide">
                                <Form.Item>
                                    {getFieldDecorator("volantDirection ", {
                                        rules: [{ required: true, message: "Volant de direction  est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Jeu</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("volantDirectionDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Colonne de direction et arbre : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("colonneDirectionArbre", {
                                        rules: [{ required: true, message: "Colonne de direction et arbre est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Jeu</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("colonneDirectionArbreDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Mécanisme de direction <br /> (Rotule/Crémaillère/Silentbloc) </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("mecanismeDirection", {
                                        rules: [{ required: true, message: "Mécanisme de direction est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Jeu ou fuite</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("mecanismeDirectionDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Ripage : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("ripage", {
                                        rules: [{ required: true, message: "Ripage est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Ripage avant</Radio>
                                            <Radio value={2}>Ripage arriere</Radio>
                                            <Radio value={3}>Bon fonctionnement</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("ripageDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Roulements : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("roulements", {
                                        rules: [{ required: true, message: "Roulements est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("roulementsDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Roues et pneus : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("rouesPneus", {
                                        rules: [{ required: true, message: "Roues et pneus est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Moyenne état</Radio>
                                            <Radio value={3}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("rouesPneusDesc")(
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
const RoueDirection = Form.create({ name: "normal_login" })(RoueDirectionForm);
export default RoueDirection;
