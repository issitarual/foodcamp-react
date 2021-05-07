export default function Total(props){
    const {prato, quantidade, valor} = props
    return(
        <div className="pedidos">
            <span>{prato} ({quantidade}x)</span>
            <span>R$ {valor}</span>
        </div>
    )
}