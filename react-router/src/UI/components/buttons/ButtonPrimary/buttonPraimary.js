import './buttonPraimary.scss';
import React, { useState } from 'react';

function ButtonPraimary(props) {
    const [opisButtona, setOpisButtona] = useState(props.value || 'brak Opisu')
    const [number, setNumber ] = useState(props.tablica || [])

    const [disabled, set] = useState(props.disabled || false)
    console.log(disabled, props.disabled)
    const paragraf = () => {
        return number.map((item, index) => {
            console.log(item)
            return <p key={index}>{item}</p>
        })
    }
    return (
        <div>
            {paragraf()}
            <button disabled={disabled}  className='btn-praimary'>{opisButtona.toUpperCase()}</button>
        </div>
    )
}
export default ButtonPraimary;