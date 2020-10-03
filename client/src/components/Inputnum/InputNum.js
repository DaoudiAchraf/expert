import React, { useState } from "react";
import { Input, Icon } from 'antd';

function formatNumber(value) {
    value += '';
    const list = value.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
        result = `,${num.slice(-3)}${result}`;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends React.Component {
    onChange = e => {
        const { value } = e.target;
        const reg = /^-?[0-9]*(\.[0-9]*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.props.onChange(value);
        }
    };

    // '.' at the end or only '-' in the input box.


    render() {
        const { value, placeholder, noicon } = this.props;
        const title = value ? (
            <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
        ) : (
                'Input a number'
            );
        return (
            <Input
                prefix={!noicon ? <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} /> : null}
                {...this.props}
                onChange={this.onChange}
                placeholder={placeholder ? placeholder : 'Phone'}
                maxLength={25}
            />
        );
    }
}

// class NumericInputDemo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };
//   }

//   onChange = value => {
//     this.setState({ value });
//   };

//   render() {
//     return (
//       <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />
//     );
//   }
// }
export default NumericInput;