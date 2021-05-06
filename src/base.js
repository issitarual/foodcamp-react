import React from 'react';

export default function Base(props){
    const [texto, setTexto] = React.useState("Selecione os 3 itens para fechar o pedido");
    const [color, setColor] = React.useState('#CBCBCB');
    const {prato, bebida, sobremesa} = props;

    React.useEffect(() => {document.querySelector(".base").children[0].style.backgroundColor = color;}, [color]);
    return(
        <div class="base">
            <div onClick={FecharPedido}>
                <p>{texto}</p>
            </div>
        </div>
    )

    function OpcoesSelecionadas(){
        if(sobremesa !== 0 && bebida !== 0 && prato !== 0){
            setTexto("Fechar pedido");
            setColor(color !== null?'#32B72F':'#CBCBCB')
        }
    }

    function FecharPedido(){
       
    }
}