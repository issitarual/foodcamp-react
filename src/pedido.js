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
                    <span onClick={()=>setContador(contador -1)}>-</span>
                    <span>{contador}</span>
                    <span onClick={()=>setContador(contador +1)}>+</span>
                </div>
            </span>
        </div>
    )

    function Selecionado() {
        setBorda("borda-verde")
        setSelecionado("adicionar")
    };
}