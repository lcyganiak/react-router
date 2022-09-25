import React, {useState} from 'react'
import Tabel from '../../UI/components/table/Tabel'

function MojeZadania() {
    const caption = 'Tabela z moimi zadaniami'
    const [tHead , settHead] = useState(['Tytuł zadania', 'Czas na wykonie', 'status', "Zmień status"]);
    const [tData, setTdata] = useState([
      {
        name: "Nowość w react router",
        status: "New",
        czas : 7,
        id: 1
      },
      {
        name: "JavaScript Use Strict",
        status: "New",
        czas : 7,
        id: 2
      },
      {
        name: "Redux",
        status: "Progress",
        czas : 14,
        id: 3
      },
    ])
    const [status, setStatus] = useState(['New', 'Progress', 'End'])
    const changeStatus = (newVal) => {
      setTdata(newVal)
    }
  return (
    <div>
        <Tabel 
          caption={caption} 
          tHead={tHead} tData={tData} 
          status={status}
          changeStatus={changeStatus} >

        </Tabel>

    </div>
  )
}

export default MojeZadania