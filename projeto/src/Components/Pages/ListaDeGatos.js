import style from '../Pages/pages.module.css/ListaDeGatos.module.css'
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import axios from 'axios'

function ListaDeGatos() {


  const [expandedCards, setExpandedCards] = useState({});
  const [tags, setTags] = useState([]);
  const [IdsCats, setIdsCats] = useState([]);


  //#region GetTagsTitle
  useEffect(() => {
    GetTags();
  }, []);

  async function GetTags() {

    try {
      Swal.fire({
        title: 'Aguarde',
        text: 'Carregando...',
        imageUrl: 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
        showConfirmButton: false,
        allowOutsideClick: false,
      });

      const response = await axios.get("/tags");
      const responseArryByAxios = response.data
      Swal.close();
      setTags(responseArryByAxios)


    } catch (error) {

      console.log('Ocorreu um erro em GetTags:' + error)
    }

  }
  //#endregion

  //#region GetIdsBody
  useEffect(() => {
    GetIdsCats();
  }, []);

  async function GetIdsCats() {

    try {

      const response = await axios.get("/cats");
      setIdsCats(response.data)
    } catch (error) {
      console.log('Erro em getIdsCats' + error)
    }


  }
  //#endregion

  //#region ShowCars 
  function ShowCard(id) {

    setExpandedCards({
      ...expandedCards,
      [id]: !expandedCards[id],
    });
  }
  //#endregion   

  //#region object montage
  const Ids = []
  IdsCats.forEach(element => {

    const data = element.id
    Ids.push(data)

  });

  const cards = []
  for (let index = 0; index < tags.length; index++) {

    const obj = {
      body: Ids,
      title: tags[index]

    }
    cards.push(obj)
  }

  //#endregion



  return (
    <>

      <div className={style.Container}>

        {cards.map((itens, index) =>
          <div key={index} className={style.Body}>
            <h3 onClick={() => ShowCard(itens.title)}>{itens.title}</h3>
            {expandedCards[itens.title] && (
              <span>
                {itens.body.map(id => <div key={id}>{id}</div>)}
                <p>*Tag do card selecionado : {itens.title}</p>
              </span>
            )}
          </div>
        )}
      </div>




    </>
  );
}

export default ListaDeGatos;












