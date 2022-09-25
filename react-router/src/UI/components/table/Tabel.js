import React, { useState, useEffect } from 'react'
import './Tabel.scss'

function Tabel(props) {
    const [caption, setCaption] = useState(props.caption || "Brak tytułu")
    const [tHead, setThead] = useState(props.tHead || [])
    const [tData, setTdata] = useState(props.tData || [])
    const [status, setStatus] = useState(props.status || [])

    const [liczba, setLiczba] = useState(0)



    const createdTHead = () => {
        const tHeadAddMoreBtn = [...tHead]

        return tHeadAddMoreBtn.map((item, index) => <th key={index}>{item}</th>)
    }
    const changeAfterClick = (parametr) => {
        
        const indexStatus = status.findIndex(item => item === parametr.status)
        console.log(indexStatus)

        parametr.status = status.length === indexStatus ? status[indexStatus -1] : status[indexStatus + 1]
        props.changeStatus([...tData, parametr])
    }
    const createdTdata = () => {
        return tData.map((item, index) => {

            return (
                <tr key={index}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.czas}
                    </td>
                    <td>
                        {item.status}
                    </td>
          
                    <td>
                        <button onClick={() => changeAfterClick(item)} > Zmiń status</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div>
            <h1>{caption}</h1>

            <table>
                <tr>
                    {createdTHead()}
                </tr>
                {createdTdata()}
            </table>
        </div>
    )
}

export default Tabel