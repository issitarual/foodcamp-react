import React from 'react';

export default function Base(props){
    const [texto, setTexto] = React.useState("Selecione os 3 itens para fechar o pedido");
    const [color, setColor] = React.useState('#CBCBCB');
    React.useEffect(() => {document.querySelector(".base").children[0].style.backgroundColor = color;}, [color]);
    const {prato, bebida, sobremesa} = props
    return(
        <div class="base">
            <div onClick={FecharPedido}>
                <p>{texto}</p>
            </div>
        </div>
    )

    function OpcoesSelecionadas(){
        if(prato.length !== 0 && bebida.length !== 0 && sobremesa.length !== 0){
            setTexto("Fechar pedido");
            setColor(color !== null?'#32B72F':'#CBCBCB')
        }
    }

    function FecharPedido(){
        setTexto("Fechar pedido");
        setColor(color !== null?'#32B72F':'#CBCBCB')
        if(color == '#32B72F'){
            whatsapp();
        }
    }

    function whatsapp(){
        let texto_whatsapp_saudacao = "Olá, gostaria de fazer o pedido: ";
        let texto_whatsapp_prato = " \n - Prato: " + prato;
        let texto_whatsapp_bebida = " \n- Bebida: " + bebida;
        let texto_whatsapp_sobremesa = " \n- Sobremesa: " + sobremesa;
        let texto_whatsapp_valor_total = " \nTotal: R$ " +  "xx.xx" + "0";
        const texto_whatsapp = texto_whatsapp_saudacao  + texto_whatsapp_prato + texto_whatsapp_bebida + texto_whatsapp_sobremesa + texto_whatsapp_valor_total;
        let texto = encodeURI(texto_whatsapp);
        let site = "https://wa.me/5521969217949?text=" + texto;
        window.location.href = site;
    }
}