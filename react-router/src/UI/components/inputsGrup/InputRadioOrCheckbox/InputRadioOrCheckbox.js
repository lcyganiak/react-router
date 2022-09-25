import React, { useState } from 'react';
import uniqid  from 'uniqid';
function InputRadioOrCheckbox(props) {
    const [legendText, setLegendText] = useState(props.legendText || 'Brak opisu')
    const [listRadio, setListRadio] = useState(props.listRadio || [])
    const [nameRadioInput, setNameRadioInput] = useState(props.nameRadioInput || 'noName')
    const [checkBoxOrRadio, setCheckBoxOrRadio] = useState(props.checkBoxOrRadio || 'checkbox')

    const createRadioInput = () => {
       
        return listRadio.map(item => {
            const idAndFor = uniqid()
            if(checkBoxOrRadio === 'checkbox') {
                return (
                    <div key={idAndFor} >
                        <input  type="checkbox" id={idAndFor}  value={item.value}/>
                        <label htmlFor={idAndFor}>{item.labelText}</label>
                    </div>
                )
            } else {
                return (
                    <div key={idAndFor} >
                        <input  type="radio" id={idAndFor} name={nameRadioInput} value={item.value}/>
                        <label htmlFor={idAndFor}>{item.labelText}</label>
                    </div>
                )
            }
    
        })
    }
    return (
        <fieldset>
            <legend>{legendText}</legend>
            {createRadioInput()}
        </fieldset>
    )
}

export default InputRadioOrCheckbox