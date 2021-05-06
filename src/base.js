import React from 'react';

export default function Base(props){
    const {prato, bebida, sobremesa} = props

    let retorno = OpcoesSelecionadas(prato, bebida, sobremesa);

    Prato();
    Bebida();
    Sobremesa ();
    
    return(
        <div className ="base">
            <div onClick={retorno ? whatsapp : ""} className = {retorno ? "verde" : "cinza"}>
                <p>{retorno ? "Fechar Pedido" : "Selecione 3 itens para continuar"}</p>
            </div>
        </div>
    )

    function Prato(){
        let arrayPrato = prato.map(n=> `\n${n.prato} (${n.quantidade}x)`);
        arrayPrato.forEach(Retorno);
    }

    function Bebida(){
        let arrayBebida = bebida.map(n=> `\n${n.prato} (${n.quantidade}x)`);
        arrayBebida.forEach(Retorno);
    }

    function Sobremesa(){
        let arraySobremesa= sobremesa.map(n=> `\n${n.prato} (${n.quantidade}x)`)
        arraySobremesa.forEach(Retorno);
    }

    function Retorno(item){
        console.log(item);
        return item;
    }


    function whatsapp(){
        //preço total
        let totalPrato = prato.map(n => parseInt(n.valor.replace(',','.'))).reduce((total, numero) => total + numero, 0);
        let totalBebidas = bebida.map(n => parseInt(n.valor.replace(',','.'))).reduce((total, numero) => total + numero, 0);
        let totalSobremesas = sobremesa.map(n => parseInt(n.valor.replace(',','.'))).reduce((total, numero) => total + numero, 0);
        let total = (totalBebidas + totalPrato + totalSobremesas).toFixed(2);

        //
        
        //mensagem de whatsapp
        let texto_whatsapp_saudacao = "Olá, gostaria de fazer o pedido: ";
        let texto_whatsapp_prato = " \n - Prato: "  ;
        let texto_whatsapp_bebida = " \n- Bebida: " ;  
        let texto_whatsapp_sobremesa = " \n- Sobremesa: " ;
        let texto_whatsapp_valor_total = " \nTotal: R$ " +  total;
        const texto_whatsapp = texto_whatsapp_saudacao  + texto_whatsapp_prato + texto_whatsapp_bebida + texto_whatsapp_sobremesa + texto_whatsapp_valor_total;
        let texto = encodeURI(texto_whatsapp);
        let site = "https://wa.me/5521969217949?text=" + texto;
        
        
        window.location.href = site;
    }
}

function OpcoesSelecionadas(prato, bebida, sobremesa){
    return (prato.length > 0 && bebida.length > 0 && sobremesa.length > 0)? true: false;
}
