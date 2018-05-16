import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const t1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const t2 = 7
    const osa3 = 'Komponenttien tila'
    const t3 = 14

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} t1={t1} t2={t2} t3={t3} />
            <Yhteensa t1={t1} t2={t2} t3={t3} />
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osannimi={props.osa1} tehtava={props.t1}/>
            <Osa osannimi={props.osa2} tehtava={props.t2}/>
            <Osa osannimi={props.osa3} tehtava={props.t3}/>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.t1 + props.t2 + props.t3} tehtävää</p>
        </div>
    )

}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osannimi} {props.tehtava}</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)