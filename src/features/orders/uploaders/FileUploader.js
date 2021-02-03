import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Progress, Button, Spinner } from 'reactstrap';
import { myAxios, apiUrl } from '../../../axios';

const FileUploader = ({ id, type, value, onChange, ...props }) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [fileUploadProgress, setFileUploadProgress] = useState(0)
    const [loading, setLoading] = useState(false)
    const [upImg, setUpImg] = useState();

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener('load', () => setUpImg(reader.result));
        reader.readAsDataURL(event.target.files[0]);
        setFileUploadProgress(0)
    };

    const onFileUpload = async (value, onChange, selectedFile) => {

        const formData = new FormData();
        formData.append('file', selectedFile);
        const token = JSON.parse(localStorage.getItem('user')).id
        const data = await myAxios.post(`admins/file?access_token=${token}&folder=upload`, formData,
            {
                onUploadProgress: ProgressEvent => {
                    console.log('progress: ', (ProgressEvent.loaded / ProgressEvent.total * 100));
                    setFileUploadProgress(ProgressEvent.loaded / ProgressEvent.total * 100)
                }
            });
        let attachment = {
            ...value,
        }
        console.log(data);

        attachment.preview = data.data.preview
        attachment.result = data.data.result
        onChange(attachment)

    }

    return (
        <div className='d-flex align-items-center justify-content-space-between flex-column'>
            <label for={`${id}`}>
                <div className='img'>
                    <i className='fa fa-close'
                        onClick={(e) => {
                            e.preventDefault()
                            onChange(null)
                        }
                        } />
                    <img src={value && value.result
                        || upImg
                        || require('../../../assets/img/tempfile.png')}
                        className='file_prev' />
                    {/* <Img
                        // src={['https://www.example.com/foo.jpg', 'https://www.example.com/bar.jpg']}
                        src={[value && apiUrl + value.url
                            || require('../assets/img/logo.png')]}
                        unloader={<Spinner />}
                    /> */}
                </div>
            </label>
            <Progress animated={fileUploadProgress < 100 ? true : false}
                color="success"
                value={fileUploadProgress}
                className='w-75' />
            <Input hidden type='file' onChange={onFileChange} id={`${id}`} />
            {loading ? <i className='fa fa-spinner fa-spin' /> :
                <Button
                    size='sm'
                    color={selectedFile ? 'info' : 'defautl'}
                    disabled={selectedFile ? false : true} onClick={(e) => {
                        e.preventDefault();
                        onFileUpload(value, onChange, selectedFile)
                    }}><i className='fa fa-upload' /></Button>

            }
        </div>
    );
};


export default FileUploader;