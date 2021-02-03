import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';
import { Map } from './Map';

const MapSelectInput = ({ values, onChange, value }) => {
    return (
        value.from && value.to ?
            <Map height={400}
                draggable={true}
                onChange={onChange}
                value={value}
                values={values}
                markers={
                    value.from && value.to && [
                        {
                            label: value.fromAddress,
                            position: value.from,
                            from: true,
                            icon: require('../../assets/img/Apin.png')
                        },
                        {
                            label: value.toAddress,
                            position: value.to,
                            to:true,
                            icon: require('../../assets/img/Bpin.png')
                        }
                    ] ||
                    []} />
            : <Jumbotron className='bg-white img-center'>
                <img src={require('../../assets/img/addRoute.png')} 
                onClick={()=>{
                    onChange({
                        ...value,
                        from: { lat: 41.3, lng: 69.2 },
                        to: { lat: 41.3, lng: 69.2 },
                     })
                }} />
            </Jumbotron>
    );
};

MapSelectInput.propTypes = {};

export default MapSelectInput;