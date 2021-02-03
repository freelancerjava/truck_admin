import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { myAxios } from '../../axios';
import { Input, Progress, Button } from 'reactstrap';

const FileUploader = ({...props}) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [fileUploadProgress, setFileUploadProgress] = useState(0)
    const [loading, setLoading] = useState(false)

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
        setFileUploadProgress(0)
    };

    const onFileUpload = async (onChange, selectedFile) => {

        const formData = new FormData();
        formData.append(
            "file",
            selectedFile,
            // selectedFile.name
        );
        const token = JSON.parse(localStorage.getItem('user')).id
        const data = await myAxios.post(`admins/file?access_token=${token}&folder=upload`, formData,
            {
                onUploadProgress: ProgressEvent => {
                    console.log('progress: ', (ProgressEvent.loaded / ProgressEvent.total * 100));
                    setFileUploadProgress(ProgressEvent.loaded / ProgressEvent.total * 100)
                }
            });
        let attachment = {
            transport1: data.data
        }
        onChange(attachment)

    }

    return (
        <div className='d-flex align-items-center justify-content-space-between flex-column'>
            <label for='file-id'>
                <img src={props.input.value.transport1
                    && props.input.value.transport1.result
                    || require('../../assets/img/tempfile.png')}
                    className='file_prev' />
            </label>
            <p className='text-success'>{selectedFile ? selectedFile.name : 'Выберите файл'}</p>
            <Progress value={fileUploadProgress} className='w-75' />
            <Input hidden type='file' onChange={onFileChange} id='file-id' />
            {loading ? <i className='fa fa-spinner fa-spin' /> :
                <Button
                    color={selectedFile ? 'info' : 'defautl'}
                    disabled={selectedFile ? false : true} onClick={(e) => {
                        e.preventDefault();
                        onFileUpload(props.input.onChange, selectedFile)
                    }}>Загрузить</Button>
            }
        </div>
    );
};

FileUploader.propTypes = {};

export default FileUploader;