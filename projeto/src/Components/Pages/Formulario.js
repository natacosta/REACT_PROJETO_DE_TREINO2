import style from './pages.module.css/Teste.module.css'
import Etapas from "../Layout/Forms/EtapasForms"
import FirstForm from "../Layout/Forms/FirstForm"
import SecundForm from "../Layout/Forms/SecundForm"
import ThirdForm from "../Layout/Forms/ThirdForm"

import React, { useContext, useState } from "react"
import { ContextForm } from '../Context/Forms'

function Teste() {

    const { Etapa } = useContext(ContextForm)

    return (

        <>

            <div className={style.Container}>
                <Etapas></Etapas>

                {Etapa === 1 && (

                    <FirstForm></FirstForm>
                )}
                {Etapa === 2 && (

                    <SecundForm></SecundForm>
                )}
                {Etapa === 3 && (

                    <ThirdForm></ThirdForm>
                )}
            </div>
        </>
    )
}

export default Teste