import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import DangerBar from '../DangerBar/DangerBar';

import React from 'react'

const DangerInput = () => {
        //Variable que va a guardar el valor elegido por el usuario
        const [value, setValue] = useState(0);

        //Actualizar estado de value
        const handleChangle = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue (Number(event.target.value));
        }
    return (
        <div className='m-3 w-50'>
            <h2>Ejemplo 1</h2>
            {/*componente Padre*/}
            <Form.Range value = {value} onChange={handleChangle}/>
            {/*Componente hijo*/}
            <DangerBar value={value}/>
        </div>
  )
}

export default DangerInput