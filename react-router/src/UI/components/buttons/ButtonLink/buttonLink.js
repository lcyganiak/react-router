import './buttonLink.scss';
import React, { useState } from 'react';

function ButtonLink(props) {
    const [btnValue, setbtnValue] = useState(props.value || 'brak opisu');
    const [btnLink, setbtnLink] = useState(props.link || '')

        return(
            <button className='btn-link'>
                <a href={btnLink} target="_blank" rel="noreferrer">{btnValue}</a>
            </button>
        )
}

export default ButtonLink;