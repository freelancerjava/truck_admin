import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, InputGroup, Input } from 'reactstrap';
import moment from 'moment'


const OrderDetailInput = () => {
    return (
        <div className='d-flex flex-row flex-wrap'>
            <FormGroup className="mb-3 p-1">
                <Label for='nput-id'>Заказ</Label>
                <InputGroup className="input-group-alternative">
                    <Input type='text' id='input-id' className='p-1' value='#000' disabled />
                </InputGroup>
            </FormGroup>
            <FormGroup className="mb-3 p-1">
                <Label for='status'>Статус</Label>
                <InputGroup className="input-group-alternative">
                    <Input type='text' id='status' className='p-1' value={'Новый'} disabled />
                </InputGroup>
            </FormGroup>
            <FormGroup className="mb-3 p-1">
                <Label for='nput-id'>Дата</Label>
                <InputGroup className="input-group-alternative">
                    <Input type='text' id='input-id' className='p-1' value={moment().format('DD.MM.YYYY')} disabled />
                </InputGroup>
            </FormGroup>
            <FormGroup className="mb-3 p-1">
                <Label for='nput-id'>время</Label>
                <InputGroup className="input-group-alternative">
                    <Input type='text' id='input-id' className='p-1' value={moment().format('hh:mm')} disabled />
                </InputGroup>
            </FormGroup>
        </div>
    );
};

OrderDetailInput.propTypes = {};

export default OrderDetailInput;