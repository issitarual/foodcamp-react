import React from 'react';

export default function Pedido(props){

    const { imagem, prato, descricao, valor, escolhido, funcEscolhido } = props;
    const [borda, setBorda] = React.useState(""); 
    const [selecionado, setSelecionado] = React.useState("adicionar escondido"); 
    const [contador, setContador] = React.useState(1); 

    return(
        <div className = {borda} onClick = {selecionar}>
            <img src = {imagem} alt = {prato}></img>
            <p>{prato}</p>
            <p>{descricao}</p>
            <span>
                <p>R$ {valor}</p>
                <div className = {selecionado}>
                    <span onClick={decrementar}>-</span>
                    <span>{contador}</span>
                    <span onClick={() => acrescentar()}>+</span>
                </div>
            </span>
        </div>
    )

    function acrescentar(){
        setContador(contador +1)
        let modificar = escolhido.filter(n => n.prato !== prato);
        funcEscolhido([...modificar,{prato, valor, quantidade: contador + 1}])
    }
    
    function decrementar(){
        if(contador === 1){
            funcEscolhido(escolhido.filter(n => n.prato !== prato));
            setBorda("");
            setSelecionado("adicionar escondido");
            setContador(1);
        }
        else{
            let modificar = escolhido.filter(n => n.prato !== prato);
            setContador (contador -1);
            funcEscolhido([...modificar,{prato, valor, quantidade: contador - 1}])
        }
    }

    function selecionar() {
        if(borda === ""){
            setBorda("borda-verde");
            setSelecionado("adicionar");
            funcEscolhido([...escolhido,{prato, valor, quantidade: contador}])
        }

    }


}

