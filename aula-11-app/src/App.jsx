import { useState } from 'react';
import './App.css';
import CardComponent from './Components/Card/CardComponent';
import InputComponent from './Components/Input/InputComponent';


function App() {

  const [title, setTitle] = useState("");
  const [imgUrl,setImgUrl] = useState("");
  const [card,setCard] = useState({});
  const [IsValidado, setIsValido] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeUrl = (event) => {
    setImgUrl(event.target.value)
  }

  const validar = () => {
    let textoMaiorque3 = title.trim;
    if (textoMaiorque3>= 3 && textoMaiorque3.length > 0) {
        setIsValido(true);
    } else {
        setIsValido(false);
    }
}

  const handleButtonClick = (event) => {

    event.preventDefault()
    
    if(!IsValidado){
      setMensagemErro("Por favor, verifique os dados inseridos no formulário")
    }
   
    setCard(
      {
        title: title,
        imgUrl: imgUrl
      }
    );
  }

  return (
    <>
    <div className='head'>
      
      <h2>Crie seu card dos seus personagens favoritos.</h2>

      <form>

      <InputComponent
          title="Nome do seu Personagem"
          type="text"
          value={title} 
          fnOnChange={handleChangeTitle}
        />

        <br />

        <InputComponent
          title="URL da imagem"
          type="url"
          value={imgUrl} 
          fnOnChange={handleChangeUrl}
        />
        
        <br/>
        <button onClick={handleButtonClick}>Salvar</button>

        <MensagemErro 
          
        />

      </form>
    </div>


      <CardComponent
        title={card.title}
        imgUrl={card.imgUrl}
      />

    </>
  )
}

export default App
