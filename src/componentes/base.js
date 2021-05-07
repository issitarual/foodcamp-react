import React from 'react';


export default function Base(props){
    const {prato, bebida, sobremesa} = props

    let retorno = OpcoesSelecionadas(prato, bebida, sobremesa);
    
    return(        
        <div className ="base">
            <div onClick={retorno ? whatsapp : null} className = {retorno ? "verde" : "cinza"}>
                <p>{retorno ? "Fechar Pedido" : "Selecione 3 itens para continuar"}</p>
            </div>
        </div>
    )

    function whatsapp(){
        //cálculo do preço total
        const totalPrato = prato.map(n => (parseInt(n.valor.replace(',','.')))*n.quantidade).reduce((total, numero) => total + numero, 0);
        const totalBebidas = bebida.map(n => (parseInt(n.valor.replace(',','.')))*n.quantidade).reduce((total, numero) => total + numero, 0);
        const totalSobremesas = sobremesa.map(n => (parseInt(n.valor.replace(',','.')))*n.quantidade).reduce((total, numero) => total + numero, 0);
        const total = (totalBebidas + totalPrato + totalSobremesas).toFixed(2);
         
        //mensagem de whatsapp
        const mensagem = 
            `Olá, gostaria de fazer o pedido: 
            \n - Prato: + ${prato.map(n=> `${n.prato} (${n.quantidade}x)\n`)} 
            \n- Bebida: + ${bebida.map(n=> `${n.prato} (${n.quantidade}x)\n`) } 
            \n- Sobremesa: + ${sobremesa.map(n=> `${n.prato} (${n.quantidade}x)\n`)}
            \nTotal: R$ +  ${total}`
        window.location.href = "https://wa.me/5521969217949?text=" + encodeURI(mensagem); 
    }
}

function OpcoesSelecionadas(prato, bebida, sobremesa){
    return (prato.length > 0 && bebida.length > 0 && sobremesa.length > 0)? true: false;
}
