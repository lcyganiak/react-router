import React, { useState, useEffect } from 'react';
import './style.scss'


function ListaUl(props) {
    const [elemty, setelementy] = useState(props.items || ['Brak el. do wyświetlania'])

    const elemntyLi = () => {

        return elemty.map((item, index) => <li className='list-grup-item' key={index}>{item}</li>)
    }
    useEffect(() => {
        console.log('useEffect')
        setelementy(props.items)
    })
    return (
        <div className='bd-example'>
            <ul className='list-grup'>
                {elemntyLi()}
            </ul>
        </div>

    )
}

export default ListaUl;