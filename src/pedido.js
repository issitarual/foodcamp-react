import React from 'react';
import Sobremesa from './sobremesa';

export default function Pedido(props){

    const { imagem, prato, descricao, valor, escolhido, funcEscolhido } = props;
    const [borda, setBorda] = React.useState(""); 
    const [selecionado, setSelecionado] = React.useState("adicionar escondido"); 
    const [contador, setContador] = React.useState(1); 

    return(
        <div class={borda} onClick={Selecionado}>
            <img src = {imagem}></img>
            <p>{prato}</p>
            <p>{descricao}</p>
            <span>
                <p>R$ {valor}</p>
                <div class={selecionado}>
                    <span onClick={Decrementar}>-</span>
                    <span>{contador}</span>
                    <span onClick={() => setContador(contador +1)}>+</span>
                </div>
            </span>
        </div>
    )
    
    function Decrementar(){
        if(contador === 1){
            funcEscolhido(escolhido.filter(n => n.prato !== prato));
            setBorda("");
            setSelecionado("adicionar escondido");
            setContador(1);
        }
        else{
            setContador (contador -1);
        }
    }

    function Selecionado() {
        if(borda == ""){
            setBorda("borda-verde");
            setSelecionado("adicionar");
            funcEscolhido([...escolhido,{prato, valor, quantidade: contador}])
        }
    }


}

