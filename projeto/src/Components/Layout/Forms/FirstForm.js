import style from '../Forms/Form.module/AllForms.module.css'
import React, { useContext, useState } from "react"
import { ContextForm } from '../../Context/Forms'
import { FaCheck ,FaPen} from 'react-icons/fa'

function FirstForm() {

    const { setFirstForm, setEtapa, enableSendButton, setFinalizeAndSend, FirstForm } = useContext(ContextForm)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const [emailEmpty, setEmailEmpty] = useState(false);
    const [senhaEmpty, setSenhaEmpty] = useState(false);
    const [senhaDifferentEmpty, setSenhaDifferent] = useState(false);

    function firstSubmit(event) {
        event.preventDefault();


        switch (true) {
            case email === '':
                setEmailEmpty(true);
                break;
            case senha === '':
                setSenhaEmpty(true);
                break;
            case senha !== confirmaSenha:
                setSenhaDifferent(true);
                break;
            default:
                setEmailEmpty(false);
                setSenhaEmpty(false);
                setSenhaDifferent(false);
                setFirstForm({ email, senha });
                setEtapa(2);
                break;
        }
    }
    function SendForm(event) {
        event.preventDefault();
        setFinalizeAndSend(true)
    }
    function viewDataFirstForm(event){

        event.preventDefault();
        setEtapa(2);
    }
    function editFirstForm(){

        setFirstForm('')

    }

    if (FirstForm) {
        var data = [];
        data.push({ email: FirstForm.email, senha: FirstForm.senha });
    }   


    return (



        <>


            {FirstForm
                ? data.map((item, index) => (
                    <div key={index} className={style.Container}>
                        
                        <div className={style.step}>Etapa concluida <FaCheck></FaCheck> </div>

                        <form>
                            <div className={style.bodyForm}>
                                <span>Email</span>
                                <input value={item.email} disabled  type="text" placeholder="Email" />
                                <span>Senha</span>
                                <input value={item.senha} disabled type="password" placeholder="Senha" />
                                <div className={style.edit} onClick={editFirstForm}>Editar esta Etapa <FaPen></FaPen></div>

                            </div>
                            <div className={style.btns}>

                                <button onClick={viewDataFirstForm}>Avançar</button>
                                {enableSendButton ? <button onClick={SendForm} className={style.enableClick}>Enviar</button> : <button className={style.disableClick}>Enviar</button>}

                            </div>
                        </form>
                    </div>
                ))
                : (

                    <div className={style.Container}>
                        <form>
                            <div className={style.bodyForm}>

                                {emailEmpty ? <span className={style.errorText}>O campo de email está vazio</span> : <span>Email</span>}
                                <input value={email} onChange={(event) => setEmail(event.target.value)} className={emailEmpty ? style.error : ''} type='text' placeholder='Email:'></input>

                                {senhaEmpty ? <span className={style.errorText}>O campo de senha está vazio</span> : <span>Senha</span>}
                                <input value={senha} onChange={(event) => setSenha(event.target.value)} className={senhaEmpty ? style.error : ''} type='password' placeholder='Senha:'></input>

                                {senhaDifferentEmpty ? <span className={style.errorText}>As senhas são diferentes </span> : <span>Confime sua senha</span>}
                                <input value={confirmaSenha} onChange={(event) => setConfirmaSenha(event.target.value)} className={senhaDifferentEmpty ? style.error : ''} type='password' placeholder='Digite sua senha novamente:'></input>

                            </div>
                            <div className={style.btns}>

                                <button onClick={firstSubmit}>Avançar</button>
                                {enableSendButton ? <button onClick={SendForm} className={style.enableClick}>Enviar</button> : <button className={style.disableClick}>Enviar</button>}

                            </div>
                        </form>
                    </div>
                )
            }
        </>
    )
}

export default FirstForm