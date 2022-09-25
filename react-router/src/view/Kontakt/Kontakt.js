import React, {useState} from 'react'
import InputText from '../../UI/components/inputsGrup/inputText/inputText'
function Kontakt() {
const [tekst, settekst] = useState('Wpisz swoje dane kontaktowe');
const [daneKontaktowe, setDaneKontaktowe] = useState('')

const upDateDaneKontaktowe = (newVal) => {
    setDaneKontaktowe(newVal)
}
  return (
    <div>
        <p>{daneKontaktowe}</p>

        <InputText text={tekst} upDateDaneKontaktowe={upDateDaneKontaktowe}></InputText>
    </div>
  )
}

export default Kontakt