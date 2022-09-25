import React, {useState, useRef} from 'react'
import uniqid  from 'uniqid';
import './Textarea.scss'

function Textarea(props) {
    const [idAndFor, setIdAndFor] = useState(uniqid());
    
    const [rowsAndCols, setrowsAndCols] = useState(props.rowsAndCols || {
        rows: "4",
        cols: '50'
    })
    const [textArea, setTextArea] = useState(props.textArea)
    const referencje = useRef('')
    const changeText = () => {
        console.log(referencje) // cała referencja ,mamy w niem min. cały objekt HTML do którego przypisamiśmy referencje
        console.log(referencje.current) // tu najduje się sam obiekt HTML z przypisną referencję w naszym wypadku textarea, to jest to samo co po pobraniu document.getElementById
        console.log(referencje.current.value) // dokładan wartość z textarea
        props.upDateTextArea(referencje.current.value)
    }
    const renderTextArea = () => {
        console.log(props)
        // gdy nie ma tesktu wchodzimy w else i wytwarzamy textarea z paleholderem
        if(textArea !== undefined) {
            return (
                <div className='textArea'>
                <label htmlFor={idAndFor}>Review of W3Schools:</label>
                
                <textarea ref={referencje} id={idAndFor} name="w3review" rows={rowsAndCols.rows} cols={rowsAndCols.cols} >
                   {textArea}
                </textarea>
    
            </div>
            )
        } else {
            return (
                <div className='textArea'>
                <label htmlFor={idAndFor}>Review of W3Schools:</label>
    
                <textarea ref={referencje} id={idAndFor} name="w3review" rows={rowsAndCols.rows} cols={rowsAndCols.cols} placeholder="Wpisz tekst">
                </textarea>
    
            </div>
            )
        }
    }

    return (
        <>
        {renderTextArea()}

            <button onClick={changeText}>Zmina tekstu</button>
        </>
    )
}

export default Textarea