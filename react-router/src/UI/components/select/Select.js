import React, { useState } from 'react';
// biblioteka npm (https://www.npmjs.com/package/uniqid ) do tworzenia unikalnych id
// alternatywa (https://www.npmjs.com/package/uuid) - mabedziej rozbudowana
import uniqid  from 'uniqid';
import './select.scss'


function Select(props) {
const createId = () => {
        return uniqid()
    }
const [labelText, setLabelText] = useState(props.labelText || "Brak tekstu w Lebelce")
const [options, setOptions] = useState(props.options || [])
const [idFor, setIdFor] = useState(createId())


const generetOptions = () => {
    return options.map( item => <option key={item.id}  value={item.value}>{item.name}</option>)
}
    return (
        <div className='custom-select'>
            <label htmlFor={idFor}>{labelText}</label>

            <select name="cars" id={idFor}  >
                {generetOptions()}
            </select>

        </div>
    )
}
export default Select