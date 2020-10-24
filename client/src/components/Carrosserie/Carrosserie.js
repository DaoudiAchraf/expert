import React from 'react';
import { Form, Input, Radio } from "antd";
import './Carrosserie.scss';
const { TextArea } = Input;
const CarrosserieForm = props => {
    const { getFieldDecorator } = props.form;
    const dateFormat = 'YYYY-MM-DD';
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                const obj = { ...props.rapportData, 'carrosserie': data }
                props.setRapportData(obj);
                console.log("data", props.rapportData);
                console.log(data);
                props.nextPage();
            }
        });
    };
    return (
        <div className='Carrosserie'>
            <Form id='carrosserie' className="infoClientForm" onSubmit={handleSubmit}>
                <div className="item_with_label">
                    <Input.Group compact className="item">
                        <div className="item1">
                            <p>Carrosserie : </p>
                            <div className="rightSide">
                                <Form.Item>
                                    {getFieldDecorator("carrosserie", {
                                        rules: [{ required: true, message: "Carrosserie est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("carrosserieDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Portes et capots : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("PortesCapots", {
                                        rules: [{ required: true, message: "Portes et capots est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item className="textAria">
                                    {getFieldDecorator("PortesCapotsDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Rétroviseurs extérieurs : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("RetroviseursExterieurs ", {
                                        rules: [{ required: true, message: "Rétroviseurs extérieurs est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("RetroviseursExterieursDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Pare brise et glaces : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("PareBriseGlaces", {
                                        rules: [{ required: true, message: "Pare brise et glaces est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Fissuration</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                            <Radio value={3}>à l’état d’origine</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("PareBriseGlacesDesc")(
                                        <TextArea rows={4} />
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                        <div className="item1">
                            <p>Essuie glace : </p>
                            <div>
                                <Form.Item>
                                    {getFieldDecorator("EssuieGlace", {
                                        rules: [{ required: true, message: "Essuie glace est obligatoire!" }]
                                    })(
                                        <Radio.Group>
                                            <Radio value={1}>Mauvais état</Radio>
                                            <Radio value={2}>Bonne état</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("EssuieGlaceDesc")(
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
const Carrosserie = Form.create({ name: "normal_login" })(CarrosserieForm);
export default Carrosserie;
