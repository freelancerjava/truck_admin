import React, { useState } from 'react'
import { Button, FormGroup, Input, InputGroup } from 'reactstrap'
import SimpleMap from './SimpleMap'

function MapInput({ onChange, value, ...props }) {
    const [position, setposition] = useState(value.pos.lat && value.pos || {
        lat: 41.3108238809182,
        lng: 69.28064346313478
    })
    const [zoom, setzoom] = useState(13)
    return (<>
        {/* {console.log(props)} */}
        <FormGroup className="mb-3">
            <InputGroup className="input-group-alternative">
                <SimpleMap position={position} zoom={zoom} setposition={setposition} />
            </InputGroup>
        </FormGroup>
        <FormGroup className="mb-3">
            <InputGroup className="input-group-alternative">
                <Input placeholder="Позиционный район" type="text"
                    {...props}
                    value={value.name}
                    onChange={(e) => onChange({ ...value, name: e.target.value, pos: { lat: position.lat, lng: position.lng } })}
                />
                <Input placeholder="Широта" type="number"
                    value={value.pos.lat}
                />
                <Input placeholder="Долгота" type="number"
                    value={value.pos.lng}
                />
                <Button onClick={() => {
                    onChange({ ...value, pos: { lat: position.lat, lng: position.lng } })
                }}>Определить</Button>
            </InputGroup>
        </FormGroup>
    </>)
}

export default MapInput
