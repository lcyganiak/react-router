import React, { useState } from 'react';
import './inputRadio.scss';
import uniqid  from 'uniqid';


function InputRadio(props) {
    const [legendText, setLegendText] = useState(props.legendText || 'Brak opisu')
    const [listRadio, setListRadio] = useState(props.listRadio || [])
    const [nameRadioInput, setNameRadioInput] = useState(props.nameRadioInput || 'noName')

    const createRadioInput = () => {
       
        return listRadio.map(item => {
            const idAndFor = uniqid()
            return (
                <div key={idAndFor} >
                    <input  type="radio" id={idAndFor} name={nameRadioInput} value={item.value}/>
                    <label htmlFor={idAndFor}>{item.labelText}</label>
                </div>
            )
        })
    }
    return (
        <fieldset>
            <legend>{legendText}</legend>
            {createRadioInput()}
        </fieldset>
    )
}

export default InputRadio

