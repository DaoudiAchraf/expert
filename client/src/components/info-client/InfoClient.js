import React from 'react';
import { Form, Input, DatePicker, Select, Button } from "antd";
import NumericInput from '../Inputnum/InputNum';
import './InfoClient.scss';

const { Option } = Select;

const infoClientForm = props => {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
    const dateFormat = 'YYYY-MM-DD';
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, data) => {
            if (!err) {
                console.log(data);
                props.nextPage();
            }
        });

    };

    return (
        <div className='infoClient'>
            <Form id='info-client' className="infoClientForm" onSubmit={handleSubmit}>
                <Form.Item label="Propriétaire de véhicule">
                    {getFieldDecorator("carower", {
                        rules: [{ required: true, message: "Propriétaire de véhicule est obligatoire!" }]
                    })(
                        <Input
                            placeholder="Propriétaire de véhicule"
                        />
                    )}
                </Form.Item>
                {/* <Input.Group compact>
                    <Form.Item hasFeedback>
                        {getFieldDecorator('foreign_content', {
                            rules: [{ required: true, message: '请输入外文评论!' }]
                        })(
                            <Input
                                style={{ width: '50%', height: '5rem' }}
                                type="textarea"
                                placeholder="在此输入外文评论"
                            />
                        )}
                    </Form.Item>
                    <Form.Item hasFeedback>
                        {getFieldDecorator('chinese_content', {
                            rules: [{ required: true, message: '请输入中文评论!' }]
                        })(
                            <Input
                                style={{ width: '50%', height: '5rem' }}
                                type="textarea"
                                placeholder="在此输入评论中文评论"
                            />
                        )}
                    </Form.Item>
                </Input.Group> */}

                <Form.Item label="Immatriculation">
                    {getFieldDecorator("immatriculation", {
                        rules: [
                            {
                                required: true,
                                message: "Immatriculation est obligatoire!"
                            },
                        ]
                    })(
                        <Input
                            placeholder="Immatriculation"
                        />
                    )}
                </Form.Item>
                <Form.Item label="Date de Première Mise en Circulation">
                    {getFieldDecorator("dateMec", {
                        rules: [
                            {
                                required: true,
                                message: "Date de Première Mise en Circulation est obligatoire!"
                            },
                        ]
                    })(
                        <DatePicker
                            format={dateFormat}
                        />
                    )}
                </Form.Item>
                <Form.Item label="Marque">
                    {getFieldDecorator("marque", {
                        rules: [
                            {
                                required: true,
                                message: "Marque est obligatoire!"
                            },
                        ]
                    })(
                        <Select
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Marque : ex (CITROEN , FIAT ...)"
                        //onChange={handleChanges}
                        >
                            {
                                props.cars.map((c, index) =>
                                    <Option value={c} key={index}>{c}</Option>
                                )
                            }
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="Type">
                    {getFieldDecorator("type", {
                        rules: [
                            {
                                required: true,
                                message: "Type est obligatoire!"
                            },
                        ]
                    })(
                        <Input
                            placeholder="Type"
                        />
                    )}
                </Form.Item>
                <Form.Item label="N° de série">
                    {getFieldDecorator("numserie", {
                        rules: [
                            {
                                required: true,
                                message: "N° de série est obligatoire!"
                            },
                        ]
                    })(
                        <Input
                            placeholder="N° de série"
                        />
                    )}
                </Form.Item>
                <Form.Item label="Energie">
                    {getFieldDecorator("energie", {
                        rules: [
                            {
                                required: true,
                                message: "Energie est obligatoire!"
                            },
                        ]
                    })(
                        <Select
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Marque : ex (CITROEN , FIAT ...)"
                        //onChange={handleChanges}
                        >
                            <Option value='essence'>Essence</Option>
                            <Option value='diesel'>Diesel</Option>
                            <Option value='hybride'>Hybride</Option>
                            <Option value='electrique'>Electrique</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="Puissance Fiscale">
                    {getFieldDecorator("puissance_fiscale", {
                        rules: [
                            {
                                required: true,
                                message: "Puissance Fiscale est obligatoire!"
                            },
                        ]
                    })(
                        <NumericInput noicon={'true'} placeholder={"Puissance Fiscale"} />
                    )}
                </Form.Item>
                <Form.Item label="Kilométrage">
                    {getFieldDecorator("kilométrage", {
                        rules: [
                            {
                                required: true,
                                message: "Kilométrage est obligatoire!"
                            },
                        ]
                    })(
                        <NumericInput noicon={'true'} placeholder={"Kilométrage"} />
                    )}
                </Form.Item>
                {/* <Form.Item>
                    <Button ref={props.infoClientSubmitBtn} type="primary" htmlType="submit" className="submit-button">
                        click
                    </Button>
                </Form.Item> */}
            </Form>
        </div>
    );
};

const InfoClient = Form.create({ name: "normal_login" })(infoClientForm);
export default InfoClient;
