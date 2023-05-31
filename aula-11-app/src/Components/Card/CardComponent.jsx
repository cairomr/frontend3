import style from './CardComponent.module.css';

function CardComponent(props){
    
    const imgDefault = "https://i.stack.imgur.com/z6ymy.png"; //DEFAULT TRANSPARENTE

    return(
        <div className={style.div}>
            <h2 className={style.title}>{props.title ?? "Indefinido"}</h2>
            <img className={style.img} src={props.imgUrl ?? imgDefault} />
            
        </div>
    );
}

export default CardComponent;