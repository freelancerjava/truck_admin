import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, InputGroup, Label, Input } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { useMutation } from 'react-query';
import { strapi } from '../../axios';

const ModerationModal = ({ history, id, mut_query }) => {
    const [modal, setmodal] = useState(false);
    const [moderateMut, moderateMutRes] = useMutation(mut_query, {
        onSuccess: () => {
            setmodal(false)
            history.goBack()
        }
    })

    const onSubmit = (data) => {
        moderateMut({ id: id, body: data })
    }
    return (
        <>
            <div>
                <Button color={'success'} onClick={() => {
                    onSubmit({ need_moderation: null, moderation_message: null })
                }}>Пропустить</Button>
                <Button color={'danger'} onClick={() => {
                    setmodal(true)
                }}>Отказ</Button>
            </div>
            <Modal isOpen={modal}>
                <Form
                    onSubmit={onSubmit}
                    initialValues={
                        {
                            need_moderation: false,
                            moderation_message: ''
                        }
                    }
                    // validate={validate}
                    render={({ handleSubmit, submitError, values, form }) => (
                        <form onSubmit={handleSubmit} className="form">
                            {submitError && <div className="text-red text-center">{submitError}</div>}
                            {/* {JSON.stringify(values)} */}
                            <ModalHeader>Модерация</ModalHeader>
                            <ModalBody>
                                {/* <FormGroup className="mb-3" check>
                                    <Label for={`need_moderation`} check>
                                        <InputGroup className="input-group-alternative">
                                            <Field name='need_moderation'>
                                                {props => (
                                                    <Input
                                                        id='need_moderation'
                                                        type='checkbox'
                                                        name={props.input.name}
                                                        value={props.input.value}
                                                        onChange={props.input.onChange}
                                                    />)}
                                            </Field>

                                        </InputGroup>
                                    Ожидает модерирование</Label>
                                </FormGroup> */}

                                <FormGroup className="mb-3">
                                    <Label for={`moderation_message`}>Текст отказа</Label>
                                    <InputGroup className="input-group-alternative">
                                        <Field name={'moderation_message'}>
                                            {props => (
                                                <Input
                                                    id='moderation_message'
                                                    type='textarea'
                                                    name={props.input.name}
                                                    value={props.input.value}
                                                    onChange={props.input.onChange}
                                                />)}
                                        </Field>
                                    </InputGroup>
                                </FormGroup>

                            </ModalBody>
                            <ModalFooter>
                                <Button color={'primary'} onClick={() => {
                                    handleSubmit(values)
                                }}>Сохранить</Button>
                                <Button color={'default'} onClick={() => setmodal(false)}>Назад</Button>
                            </ModalFooter>
                        </form>
                    )
                    } />
            </Modal>
        </>
    );
};

ModerationModal.propTypes = {};

export default ModerationModal;