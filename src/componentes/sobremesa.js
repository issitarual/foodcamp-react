import Pedido from './pedido';

export default function Sobremesa (props){
    const {escolhido, funcEscolhido} = props;

    const sobremesa = [
        {prato: "Brownie",
        imagem: "./imagens/sobremesa-brownie.jpeg",
        descricao: "Escolha qual sabor será o topo do seu brownie!",
        valor: "15,00"},
        {prato: "Bolo",
        imagem: "./imagens/sobremesa-bolo.jpg",
        descricao: "Bolo red velvet com recheio de cream cheese.",
        valor: "20,00"},
        {prato: "Pudim",
        imagem: "./imagens/sobremesa-pudim.jpg",
        descricao: "Delicioso pudim de leite com frutas vermelhas.",
        valor: "22,00"}];
        
    return(
        <>
            <p>Por fim, sua sobremesa</p>
            <div className = "pratos">
                {sobremesa.map((n,i) => 
                    <Pedido 
                        prato = {n.prato} 
                        imagem = {n.imagem} 
                        descricao = {n.descricao} 
                        valor = {n.valor}
                        escolhido = {escolhido}
                        funcEscolhido = {funcEscolhido}
                        key = {i}
                    />)
                } 
            </div>
        </>
    )
}