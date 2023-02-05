import React, { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";

export const ContextForm = createContext();

export const Fomrs = ({ children }) => {

    const [Etapa, setEtapa] = useState(1);


    const [FirstForm, setFirstForm] = useState('');
    const [SecondForm, setSecondForm] = useState('');
    const [thirdForm, setThirdForm] = useState('');
    const [finalizeAndSend, setFinalizeAndSend] = useState('');

    if (FirstForm != '' && SecondForm !='' && thirdForm != '') {

        var enableSendButton = 'true'
    }


    if (finalizeAndSend) {
        Swal.fire({
            title: "Dados enviados!",
            text: "Os dados foram enviados com sucesso!",
            icon: "success",
            allowOutsideClick: false,
            confirmButtonText: "OK"
        }).then((result) => {
            if (result.value) {
                window.location.reload();
            }
        });
    }


    return (

        <>
            <ContextForm.Provider value={{ Etapa, FirstForm, SecondForm, enableSendButton, thirdForm ,  setEtapa, setFirstForm, setSecondForm, setThirdForm, setFinalizeAndSend }} >
                {children}
            </ContextForm.Provider>
        </>

    )

}


