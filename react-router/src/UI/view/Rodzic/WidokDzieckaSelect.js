import React, { useState, useRef } from 'react'

function WidokDzieckaSelect(props) {
    const [options, setOptions] = useState(props.options || []);
    const wartoscSelecta = useRef(null)

    const generateOptions = () => {
        return options.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
    }
    const coWybrane = () => {
        props.change(wartoscSelecta.current.value)
        console.log(wartoscSelecta.current.value)
    }
  return (
    <div>
        <select ref={wartoscSelecta} onChange={(coWybrane)}>
            {generateOptions()}
        </select>
    </div>
  )
}

export default WidokDzieckaSelect