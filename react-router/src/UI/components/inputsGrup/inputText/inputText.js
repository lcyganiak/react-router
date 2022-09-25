import './inputText.scss'
import React, {useState, useRef} from 'react';
import Label from '../Label/label'
import uniqid  from 'uniqid';


function InputText(props) {
const [idandFor, setidandFor] =useState(uniqid())
const [placeholderText, setplaceholder] = useState(props.placeholder || 'wpisz tekst')
const [tekst, settekst] = useState(props.text || 'nie ma opisu')
const wartoscInput = useRef('')

const [required, setrequired] = useState(props.required || false)
// jeżeli chemy uzywać componentu w componecie, nalezy stworzyć funkcję, która zwróci component i 
 // dopiero uzyć 
const upDateValueInput = () => {
    console.log(wartoscInput.current.value)
    props.upDateDaneKontaktowe(wartoscInput.current.value)
}
const labelRender = () => {
    return <Label for={idandFor} tekst={tekst} ></Label>
}
    return (
        <> 
            {labelRender()}
            <input ref={wartoscInput} type="text" id={idandFor} placeholder={placeholderText} onChange={upDateValueInput} />
        </>
    )
}

export default InputText;