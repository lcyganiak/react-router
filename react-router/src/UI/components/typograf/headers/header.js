import './heders.scss';
import React, { useState } from 'react';

function Header(props) {
const [level, setLevel] = useState(props.level || 6)
const [text, setTest] = useState(props.text || 'brak tytułu')
const creat = () => {
    // if(level === 1) {
    //     return <h1>{text}</h1>
    // } // trzab if dociągnąc do 6 
    // if(level === 2) {
    //     return <h2>{text}</h2>
    // }
    // eslint-disable-next-line default-case

    // swich stosujemy w momęcie kiedy warunków typu if lub if else bezie wiecj niż 3/4
    // eslint-disable-next-line default-case
    switch(level) {
        case 1:
            return <h1>{text}</h1>
        case 2:
            return <h2>{text}</h2>
        case 3:
            return <h3>{text}</h3>
        case 4:
            return <h4>{text}</h4>
        case 5: 
            return <h6>{text}</h6>
         case 6:
            return <h6>{text}</h6>
        default:
            return <h6>{text}</h6>
    }
}
    return (
        creat()
    )
}
export default Header;