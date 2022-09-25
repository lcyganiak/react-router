import React, {useState} from 'react'
import ListaUl from '../../UI/components/lista/ListaUl/listaUL'
import Select from '../../NewUI/select/Select'


function NewPreson() {
const frontend = ['HTML', "Js", "Git", "React", "Scss"]
const backend = ["Jave", "c++", "C#", "Git", "Phyton"]
const [options, setoptions] = useState([
    {
        name: "Frontend developer",
        id: 1
    },
    {
        name: "Backend developer",
        id: 2
    }
]);
const [choseDeveloper, setchoseDeveloper] = useState(null)

const changeDeveloper = (newVal) => {
    setchoseDeveloper(newVal)
}

const showList = () => {
    console.log(choseDeveloper)
    if(choseDeveloper === '1') {
        return  <ListaUl items={frontend}></ListaUl>
    } 
    else if( choseDeveloper === '2') {
        return  <ListaUl items={backend}></ListaUl>
    } 
    else {
        return <p>Nie Wybrałeś stanowiska</p>
    }
}
  return (
    <div>
        <Select options={options} changeDeveloper={changeDeveloper}></Select>


       {showList()}
    </div>
  )
}

export default NewPreson