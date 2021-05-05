import Pedido from './pedido';

export default function Prato(){
    const principal = [
        {prato: "Churrasco",
        imagem: "./imagens/prato-churrasco.png",
        descricao: "Várias carnes boas com direito a dois acompanhamentos a sua escolha.",
        valor: "R$ 80,00"},
        {prato: "Pizza",
        imagem: "./imagens/prato-pizza.png",
        descricao: "Se você for comer a pizza da Itália e depois a daqui não vai notar diferença.",
        valor: "R$ 60,00"},
        {prato: "Comida japonesa",
        imagem: "./imagens/pratos-japonesa.jpg",
        descricao: "Monte seu combo de rolls! Enviamos molho em todos os pedidos.",
        valor: "R$ 50,00"}];
return (    
    <>
            <p>Primeiro, seu prato</p>
            <div class="pratos">
                {principal.map(n => 
                    <Pedido 
                        prato = {n.prato} 
                        imagem = {n.imagem} 
                        descricao = {n.descricao} 
                        valor = {n.valor}
                    />)
                }                
            </div>
    </>
)
}