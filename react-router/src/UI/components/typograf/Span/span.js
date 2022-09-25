import './span.scss';
import React, { useState } from 'react';

function Span(props) {
    const [text, setText] = useState(props.text || 'Brak')

    return (
        <>
            <span>{text}</span>
        </>
    )
}

export default Span;