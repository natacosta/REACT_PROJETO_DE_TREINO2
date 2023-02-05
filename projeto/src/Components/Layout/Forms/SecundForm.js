
import React, { useContext, useState } from "react"
import { ContextForm } from '../../Context/Forms'
import style from '../Forms/Form.module/AllForms.module.css'
import { FaCheck ,FaPen} from 'react-icons/fa'

function SecundForm() {

    const { setSecondForm, setEtapa, enableSendButton, setFinalizeAndSend, SecondForm } = useContext(ContextForm)

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataDeNascimento, setDataDeNascimento] = useState('');

    const [nomeEmpty, setNomeEmpty] = useState(false);
    const [sobrenomeEmpty, setSobrenomeEmpty] = useState(false);
    const [dataDeNascimentoEmpty, setDataDeNascimentoEmpty] = useState(false);



    function Secondsubmit(event) {

        event.preventDefault()

        switch (true) {
            case nome === '':
                setNomeEmpty(true);
                break;
            case sobrenome === '':
                setSobrenomeEmpty(true);
                break;
            case dataDeNascimento === '':
                setDataDeNascimentoEmpty(true);
                break;
            default:
                setNomeEmpty(false);
                setSobrenomeEmpty(false);
                setDataDeNascimentoEmpty(false);
                setSecondForm({ nome, sobrenome, dataDeNascimento })
                setEtapa(3);
                break;
        }
    }

    function SendForm(event) {
        event.preventDefault();
        setFinalizeAndSend(true)
    }

    if (SecondForm) {
        var data = [];
        data.push({ nome: SecondForm.nome, sobrenome: SecondForm.sobrenome, dataDeNascimento: SecondForm.dataDeNascimento });
    }
    function viewDataSecund(event){

        event.preventDefault();
        setEtapa(3);
    }
    function editScundForm(){

        setSecondForm('')
    }


    return (
        <>

            {SecondForm ?

                data.map((item, index) => (
                    <div className={style.Container}>
                        
                        <div className={style.step}>Etapa concluida <FaCheck></FaCheck> </div>

                        <form>
                            <div className={style.bodyForm}>

                                {nomeEmpty ? <span className={style.errorText}>O campo de nome está vazio</span> : <span>Nome</span>}
                                <input value={item.nome} onChange={(event) => setNome(event.target.value)} className={nomeEmpty ? style.error : ''} type='text' placeholder='Nome:'></input>

                                {sobrenomeEmpty ? <span className={style.errorText}>O campo de sobrenome está vazio</span> : <span>Sobrenome</span>}
                                <input value={item.sobrenome} onChange={(event) => setSobrenome(event.target.value)} className={sobrenomeEmpty ? style.error : ''} type='text' placeholder='Sobrenome:'></input>

                                {dataDeNascimentoEmpty ? <span className={style.errorText}>A data de nascimento está vazia </span> : <span>Data de nascimento</span>}
                                <input value={item.dataDeNascimento} onChange={(event) => setDataDeNascimento(event.target.value)} className={dataDeNascimentoEmpty ? style.error : ''} type='date' placeholder='Digite sua data de nascimento:'></input>
                                <div className={style.edit} onClick={editScundForm}>Editar esta Etapa <FaPen></FaPen></div>

                            </div>
                            <div className={style.btns}>

                                <button onClick={viewDataSecund}>Avançar</button>
                                {enableSendButton ? <button onClick={SendForm} className={style.enableClick}>Enviar</button> : <button className={style.disableClick}>Enviar</button>}

                            </div>
                        </form>
                    </div>

                )) : (


                    <div className={style.Container}>
                        <form>
                            <div className={style.bodyForm}>

                                {nomeEmpty ? <span className={style.errorText}>O campo de nome está vazio</span> : <span>Nome</span>}
                                <input value={nome} onChange={(event) => setNome(event.target.value)} className={nomeEmpty ? style.error : ''} type='text' placeholder='Nome:'></input>

                                {sobrenomeEmpty ? <span className={style.errorText}>O campo de sobrenome está vazio</span> : <span>Sobrenome</span>}
                                <input value={sobrenome} onChange={(event) => setSobrenome(event.target.value)} className={sobrenomeEmpty ? style.error : ''} type='text' placeholder='Sobrenome:'></input>

                                {dataDeNascimentoEmpty ? <span className={style.errorText}>A data de nascimento está vazia </span> : <span>Data de nascimento</span>}
                                <input value={dataDeNascimento} onChange={(event) => setDataDeNascimento(event.target.value)} className={dataDeNascimentoEmpty ? style.error : ''} type='date' placeholder='Digite sua data de nascimento:'></input>

                            </div>
                            <div className={style.btns}>

                                <button onClick={Secondsubmit}>Avançar</button>
                                {enableSendButton ? <button onClick={SendForm} className={style.enableClick}>Enviar</button> : <button className={style.disableClick}>Enviar</button>}

                            </div>
                        </form>
                    </div>

                )

            }
        </>
    )
}

export default SecundForm


