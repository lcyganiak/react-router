import React, { useState } from 'react';
import WidokDzieckaSelect from './WidokDzieckaSelect';


function WidokRodzicSAmochody() {
const [options, setOptions] = useState([
    {
        name: "Audi",
        id: 1
    },
    {
        name: "BMW",
        id: 2
    },
    {
        name: "Opel",
        id: 3
    }
])
const [wybraneAuto, setWybraneAuto] = useState(null)

const audi = 'Audi AG – niemiecki producent samochodów osobowych z siedzibą w Ingolstadt w Niemczech, należący do koncernu Volkswagen AG. Założony został w 1909 roku przez Augusta Horcha, który założył nową spółkę po tym, jak odszedł z zarządu August-Horch-Motorwagen AG, którą założył w 1899'
const bmw = 'Bayerische Motoren Werke Aktiengesellschaft – niemiecki koncern motoryzacyjny produkujący od 1916 roku samochody osobowe, motocykle, skutery oraz silniki.'
const opel = 'Opel Automobile GmbH – niemiecki producent samochodów osobowych, sportowych i dostawczych z siedzibą w Rüsselsheim am Main działający od 1862 roku. Wchodzi w skład międzynarodowego koncernu Stellantis'

const showOpis = () => {
    switch(wybraneAuto) {
        case '1': 
        return <p>{audi}</p>
        case '2':
        return <p>{bmw}</p>
        case '3': 
        return <p>{opel}</p>
        default: 
        return <p>Brak wyboru</p>
    }
}


const change = (newVal) => {
    setWybraneAuto(newVal)
}
return (
    <div>
        <WidokDzieckaSelect options={options}  change={change}/>
        {showOpis()}

    </div>
  )
}

export default WidokRodzicSAmochody