import './paragraf.scss';
import React, { useState } from 'react';

function Paragraf(props) {
const [text, setText] = useState(props.text || 'brak tekstu')
const dlugiTekst = () => {
    console.log(text.length)
    return text.length > 20 ? `${text.slice(0, 20)}...` : text
}
    return (
        <p>{dlugiTekst()}</p>
    )
}
export default Paragraf;