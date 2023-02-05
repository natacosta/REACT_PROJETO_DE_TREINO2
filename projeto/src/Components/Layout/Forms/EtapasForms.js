import style from './Form.module/EtapasForms.module.css'
import React, { useContext } from "react"
import { ContextForm } from '../../Context/Forms'

function Etapas() {

    const { setEtapa, Etapa, FirstForm , SecondForm , thirdForm } = useContext(ContextForm)


    function Etapas(event) {


        setEtapa(Number(event.target.id))
    }



    return (
        <>

            <div className={style.Container}>

                {Etapa === 1 ? <h3 id="1" className={FirstForm ? `${style.Step} ${style.Done}` : style.Step} onClick={Etapas}> 1° Etapa</h3> : <h3 id="1" onClick={Etapas}> 1° Etapa</h3>}
                {Etapa === 2 ? <h3 id="2" className={SecondForm ? `${style.Step} ${style.Done}` : style.Step} onClick={Etapas}> 2° Etapa</h3> : <h3 id="2" onClick={Etapas}> 2° Etapa</h3>}
                {Etapa === 3 ? <h3 id="3" className={thirdForm ? `${style.Step} ${style.Done}` : style.Step} onClick={Etapas}> 3° Etapa</h3> : <h3 id="3" onClick={Etapas}> 3° Etapa</h3>}
                
            </div>


        </>

    )
}

export default Etapas