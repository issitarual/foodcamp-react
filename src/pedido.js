import React from 'react';

export default function Pedido(props){
    const { imagem, prato, descricao, valor} = props;
    const [borda, setBorda] = React.useState(""); 
    return(
        <div class={borda} onClick={()=> setBorda("borda-verde")}>
            <img src = {imagem}></img>
            <p>{prato}</p>
            <p>{descricao}</p>
            <p>{valor}</p>
        </div>
    )
}