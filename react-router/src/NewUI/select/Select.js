import React, {useRef, useState} from 'react'
import uniqid  from 'uniqid';

function Select(props) {
    const [options, setOptions] = useState(props.options)

    const option = () => { return options.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)}

    const valueSelect = useRef('')

    const changeValue = () => {
        props.changeDeveloper(valueSelect.current.value)
    }
  return (
    <select ref={valueSelect} onChange={changeValue}>
        {option()}
    </select>
  )
}

export default Select