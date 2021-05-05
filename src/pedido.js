export default function Pedido(props){
    const { imagem, prato, descricao, valor} = props;
    return(
        <div onClick={()=> console.log(prato)}>
            <img src = {imagem}></img>
            <p>{prato}</p>
            <p>{descricao}</p>
            <p>{valor}</p>
        </div>
    )
}