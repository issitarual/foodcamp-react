import React from 'react';

export default function Pedido(props){
    const { imagem, prato, descricao, valor} = props;
    const [borda, setBorda] = React.useState(""); 
    const [selecionado, setSelecionado] = React.useState("adicionar escondido"); 
    const [contador, setContador] = React.useState(1); 

    return(
        <div class={borda} onClick={Selecionado}>
            <img src = {imagem}></img>
            <p>{prato}</p>
            <p>{descricao}</p>
            <span>
                <p>{valor}</p>
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
        }
    };
}