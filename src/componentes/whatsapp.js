export default function whatsapp(pratos,bebidas,sobremesa,total){
    const mensagem = 
    `Olá, gostaria de fazer o pedido: 
    \n - Prato: + ${pratos} 
    \n- Bebida: + ${bebidas} 
    \n- Sobremesa: + ${sobremesa}
    \nTotal: R$ +  ${total}`
window.location.href = "https://wa.me/5521969217949?text=" + encodeURI(mensagem); 
}