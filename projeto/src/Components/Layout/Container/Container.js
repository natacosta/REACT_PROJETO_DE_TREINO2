import style from './Container.module.css'

function Container (props){

    return(

        <div className={`${style.estilo_container} ${style[props.customClass]}`}>{props.children}</div>

    )
}






export default Container