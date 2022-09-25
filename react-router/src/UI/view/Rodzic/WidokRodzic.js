import React, { useState } from 'react';
import WidokDzieckaSelect from './WidokDzieckaSelect';

function WidokRodzic() {
    const [options, setOptions] = useState([
        {
            name: "Łódź",
            id: 1
        },
        {
            name: "Warszawa",
            id: 2
        },
        {
            name: "Poznań",
            id: 3
        },

    ])
    const [wybraneMiasto, setwybraneMiasto] = useState(null)


    const changeWybraneMisto = (newVal) => {
        setwybraneMiasto(newVal)
    }


    const opisL = "Łódź – miasto na prawach powiatu w środkowej Polsce, w historycznej ziemi łęczyckiej. Siedziba władz województwa łódzkiego, powiatu łódzkiego wschodniego oraz gminy Nowosolna, przejściowa siedziba władz państwowych w 1945 roku."
    const opisW = "Warszawa, miasto stołeczne Warszawa – stolica Polski i województwa mazowieckiego, największe miasto w kraju, położone w jego centralnej części, na Nizinie Środkowomazowieckiej, na Mazowszu, nad Wisłą. Prawa miejskie uzyskała przed 1300"
    const opisP = "Poznań – miasto na prawach powiatu w zachodniej Polsce, położone na Pojezierzu Wielkopolskim, nad rzeką Wartą, u ujścia Cybiny. Historyczna stolica Wielkopolski, od 1999 r. siedziba władz województwa wielkopolskiego i powiatu poznańskiego"

    const opisWybranegoMiasta = () => {
        switch (wybraneMiasto) {
            case "1":
                return (<p>{opisL}</p>)
            case "2":
                return (<p>{opisW}</p>)
            case "3":
                return (<p>{opisP}</p>)
            default:
                return (<p>Nie wybrano miasta</p>)
        }
    }

    return (
        <div>
            <WidokDzieckaSelect options={options} change={changeWybraneMisto} />


            {opisWybranegoMiasta()}
        </div>
    )
}

export default WidokRodzic