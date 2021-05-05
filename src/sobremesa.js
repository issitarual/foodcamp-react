import Pedido from './pedido';

export default function Sobremesa (){
    const sobremesa = [
        {prato: "Brownie",
        imagem: "./imagens/sobremesa-brownie.jpeg",
        descricao: "Escolha qual sabor será o topo do seu brownie!",
        valor: "R$ 15,00"},
        {prato: "Bolo",
        imagem: "./imagens/sobremesa-bolo.jpg",
        descricao: "Bolo red velvet com recheio de cream cheese.",
        valor: "R$ 20,00"},
        {prato: "Pudim",
        imagem: "./imagens/sobremesa-pudim.jpg",
        descricao: "Delicioso pudim de leite com frutas vermelhas.",
        valor: "R$ 22,00"}];
        
    return(
        <>
            <p>Por fim, sua sobremesa</p>
            <div class="pratos">
                {sobremesa.map(n => 
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