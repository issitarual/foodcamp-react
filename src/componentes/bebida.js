import Pedido from './pedido';

export default function Bebida (props){
    const {escolhido, funcEscolhido} = props;

    const bebida = [
        {prato: "Suco",
        imagem: "./imagens/bebida-suco.jpg",
        descricao: "Delicioso suco Laramora, mistura de morango com laranja.",
        valor: "10,00"},
        {prato: "Refrigerante",
        imagem: "./imagens/bebida-refrigerante.jpg",
        descricao: "Várias opções de refrigerante, basta escolher o seu preferido.",
        valor: "12,00"},
        {prato: "Cerveja",
        imagem: "./imagens/bebida-cerveja.jpg",
        descricao: "Da cerveja tradicional a artesanal, garantimos a qualidade.",
        valor: "8,00"}];

    return(
        <>
            <p>Agora, sua bebida</p>
            <div className = "pratos">
                {bebida.map((n, i) => 
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