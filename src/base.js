import React from 'react';

export default function Base(){
    const [texto, setTexto] = React.useState("Selecione os 3 itens para fechar o pedido");
    return(
        <div class="base">
            <div onClick={()=>setTexto("Fechar pedido")}>
                <p>{texto}</p>
            </div>
        </div>
    )
}