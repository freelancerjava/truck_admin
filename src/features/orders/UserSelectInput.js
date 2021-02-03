import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { FormGroup, InputGroup, Label, Input } from 'reactstrap';
import { AutoComplete } from 'antd';

const UserSelectInput = ({users}) => {
    return (
        <Field name='creator'>
            {props => (
                <div className='d-flex'>

                    <FormGroup className="mb-1 mt-2 p-1">
                        <InputGroup className="input-group-alternative">
                            <Label for='file-id'>
                                <div className='create-img'>
                                    <img src={props.input.value.attachments
                                        && props.input.value.attachments.main
                                        && props.input.value.attachments.main.preview
                                        || require('../../assets/img/acc_img.png')} />
                                </div>
                            </Label>
                            <Input hidden type='file' id='file-id' className='p-1' />
                        </InputGroup>
                    </FormGroup>

                    <div className='d-flex flex-row flex-wrap ml-3'>
                        <FormGroup key={1} className="mb-1 p-1">
                            <Label for='fio-id'>ФИО</Label>
                            <InputGroup className="input-group-alternative">
                                {/* <Input type='text' id='fio-id' className='p-1' value={props.input.value.first_name} /> */}
                                <AutoComplete
                                    id={'fio-id'}
                                    style={{
                                        width: 200,
                                    }}
                                    options={users.map((item, key) => {
                                        return {
                                            ...item, value: item.first_name + ' ' + item.second_name + ' ' + item.middle_name
                                        }
                                    })}
                                    value={props.input.value.first_name}
                                    onChange={(value, option) => {
                                        console.log(value, option)
                                        props.input.onChange(option)
                                    }}
                                    placeholder="try to type"
                                    filterOption={(inputValue, option) =>
                                        option.first_name && inputValue && option.first_name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        || option.second_name && inputValue && option.second_name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        || option.middle_name && inputValue && option.middle_name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup key={2} className="mb-1 p-1">
                            <Label for='phone-id'>номер телефона</Label>
                            <InputGroup className="input-group-alternative">
                                <AutoComplete
                                    id={'phone-id'}
                                    style={{
                                        width: 200,
                                    }}
                                    options={users.map((item, key) => {
                                        return {
                                            ...item, value: item.phone + ' - ' + item.first_name
                                        }
                                    })}
                                    value={props.input.value.phone}
                                    onChange={(value, option) => {
                                        console.log(value, option)
                                        props.input.onChange(option)
                                    }}
                                    placeholder="try to type"
                                    filterOption={(inputValue, option) =>
                                        option.phone && inputValue && option.phone.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                />
                                {/* <Input
                                                                // data={users.map((item, key) => {
                                                                //   return {
                                                                //     ...item,
                                                                //     content: item.phone,
                                                                //     value: item.phone
                                                                //   }
                                                                // })}
                                                                type='text'
                                                                id='input-autocomplate-id'
                                                                className='p-1'
                                                                value={props.input.value.phone}
                                                                onChange={props.input.onChange} /> */}
                            </InputGroup>
                        </FormGroup>
                        <FormGroup key={3} className="mb-1 p-1">
                            <Label for='user-id'>Пользователь</Label>
                            <InputGroup className="input-group-alternative">
                                <Input type='select' id='user-id' className='p-1'
                                    // name={props.input.name}
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        props.input.onChange({ ...props.input.value, ...users.filter(item => item.id == e.target.value)[0] })
                                    }
                                    }
                                    value={props.input.value.id}
                                >
                                    <option>---</option>
                                    {users.map((item, key) => {
                                        return (
                                            <option key={key} value={item.id}>{item.first_name} - {item.email}</option>
                                        )
                                    })}
                                </Input>

                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
            )}</Field>
    );
};

UserSelectInput.propTypes = {};

export default UserSelectInput;