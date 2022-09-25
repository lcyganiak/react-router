import './buttonSecondary.scss';
import React, { useState } from 'react';

function ButtonSecondary(props) {
    const [btnValue, xd]  = useState(props.value || 'brak opisu')

    return (
        <>
            <button className='btn-secondary'>{btnValue.toUpperCase()}</button>
        </>
    )
}
export default ButtonSecondary;