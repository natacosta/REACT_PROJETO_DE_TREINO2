import style from '../Forms/Form.module/AllForms.module.css'
import React, { useContext, useState } from "react"
import { ContextForm } from '../../Context/Forms'
import { FaCheck ,FaPen} from 'react-icons/fa'

function ThirdForm() {

    const { setThirdForm, setEtapa, enableSendButton, setFinalizeAndSend, thirdForm } = useContext(ContextForm)

    const [cidade, setCidade] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumeo] = useState('');


    const [cidadeEmpty, setCidadeEmpty] = useState(false);
    const [numeroEmpty, setNumeoEmpty] = useState(false);
    const [ruaEmpty, setRuaEmpty] = useState(false);
    const [nuemroEmpty, setNumeroEmpty] = useState(false);

    function thirdSubmit(event) {

        event.preventDefault()


        switch (true) {
            case cidade === '':
                setCidadeEmpty(true)
                break;
            case rua === '':
                setRuaEmpty(true)
                break;
            case numero === '':
                setNumeoEmpty(true)
                break;
            default:
                setCidadeEmpty(false);
                setRuaEmpty(false);
                setNumeoEmpty(false);
                setThirdForm({ cidade, rua, numero });
                //   setEtapa(4);
                break;
        }

    }

    function SendForm(event) {
        event.preventDefault();
        setFinalizeAndSend(true)
    }
    function editThirdForm(){

        setThirdForm('')

    }
    function viewDataThirdForm(event){

        event.preventDefault();
        setEtapa(3);
    }
    if (thirdForm) {
        var data = [];
        data.push({ cidade: thirdForm.cidade, rua: thirdForm.rua, numero: thirdForm.numero });
    }

    return (
        <>

            {thirdForm ?

                data.map((item, index) => (



                    < div className={style.Container}>
                        
                        <div className={style.step}>Etapa concluida <FaCheck></FaCheck> </div>

                        <form>
                            <div className={style.bodyForm}>

                                {cidadeEmpty ? <span className={style.errorText}>O campo de cidade está vazio</span> : <span>Cidade</span>}
                                <input value={item.cidade} onChange={(event) => setCidade(event.target.value)} className={cidadeEmpty ? style.error : ''} type='text' placeholder='Cidade:'></input>

                                {ruaEmpty ? <span className={style.errorText}>O campo de rua está vazio</span> : <span>Rua</span>}
                                <input value={item.rua} onChange={(event) => setRua(event.target.value)} className={ruaEmpty ? style.error : ''} type='text' placeholder='Rua:'></input>

                                {nuemroEmpty ? <span className={style.errorText}>Numero está vazio </span> : <span>Numero</span>}
                                <input value={item.numero} onChange={(event) => setNumeo(event.target.value)} className={nuemroEmpty ? style.error : ''} type='text' placeholder='Digite o numero da residência :'></input>
                                <div className={style.edit} onClick={editThirdForm}>Editar esta Etapa <FaPen></FaPen></div>

                            </div>
                            <div className={style.btns}>

                                <button onClick={viewDataThirdForm}>Avançar</button>
                                {enableSendButton ? <button onClick={SendForm} className={style.enableClick}>Enviar</button> : <button className={style.disableClick}>Enviar</button>}

                            </div>
                        </form>
                    </div>









                )) : (



                    < div className={style.Container}>
                        <form>
                            <div className={style.bodyForm}>

                                {cidadeEmpty ? <span className={style.errorText}>O campo de cidade está vazio</span> : <span>Cidade</span>}
                                <input value={cidade} onChange={(event) => setCidade(event.target.value)} className={cidadeEmpty ? style.error : ''} type='text' placeholder='Cidade:'></input>

                                {ruaEmpty ? <span className={style.errorText}>O campo de rua está vazio</span> : <span>Rua</span>}
                                <input value={rua} onChange={(event) => setRua(event.target.value)} className={ruaEmpty ? style.error : ''} type='text' placeholder='Rua:'></input>

                                {nuemroEmpty ? <span className={style.errorText}>Numero está vazio </span> : <span>Numero</span>}
                                <input value={numero} onChange={(event) => setNumeo(event.target.value)} className={nuemroEmpty ? style.error : ''} type='text' placeholder='Digite o numero da residência :'></input>

                            </div>
                            <div className={style.btns}>

                                <button onClick={thirdSubmit}>Avançar</button>
                                {enableSendButton ? <button onClick={SendForm} className={style.enableClick}>Enviar</button> : <button className={style.disableClick}>Enviar</button>}

                            </div>
                        </form>
                    </div>



                )
            }









            {/* <form>
                <span>Cidade</span>
                <input value={cidade} onChange={(event) => setCidade(event.target.value)} type='text' placeholder='Email:'></input>
                <span>Rua</span>
                <input value={rua} onChange={(event) => setRua(event.target.value)} type='text' placeholder='Senha:'></input>
                <span>Numero</span>
                <input value={numero} onChange={(event) => setNumeo(event.target.value)} type='text' placeholder='Digite sua senha novamente:'></input>
                <button onClick={thirdSubmit}>Avançar</button>
                <button>Enviar</button>

            </form> */}
        </>
    )
}

export default ThirdForm