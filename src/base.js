import React from 'react';

export default function Base(){
    const [texto, setTexto] = React.useState("Selecione os 3 itens para fechar o pedido");
    const [color, setColor] = React.useState('#CBCBCB');
    React.useEffect(() => {document.querySelector(".base").children[0].style.backgroundColor = color;}, [color]);
    return(
        <div class="base">
            <div onClick={FecharPedido}>
                <p>{texto}</p>
            </div>
        </div>
    )

    function FecharPedido(){
       // if(sobremesa !== null && bebida !== null && principal !== null){
            setTexto("Fechar pedido");
            setColor(color !== null?'#32B72F':'#CBCBCB')

        //}
    }
}