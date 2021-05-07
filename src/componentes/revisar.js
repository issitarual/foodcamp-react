import ReactDOM from 'react-dom';
import Topo from './topo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import whatsapp from './whatsapp';
import Total from './total';

export default function Revisar(props){
    const {pratos, bebidas, sobremesa, total, arrayPratos, arrayBebidas, arraySobremesa} = props;
    ReactDOM.render(
        <Router>  
        <>
            <Topo />
            <div className = "corpo">
                <p>Revise seu prato</p>
                <div className="revisao">
                        {arrayPratos.map((n,i)=><Total key = {i} prato = {n.prato} quantidade = {n.quantidade} valor = {n.valor}/>)}
                         {arrayBebidas.map((n,i)=><Total key = {i} prato = {n.prato} quantidade = {n.quantidade} valor = {n.valor}/>)}
                        {arraySobremesa.map((n,i)=><Total key = {i} prato = {n.prato} quantidade = {n.quantidade} valor = {n.valor}/>)}
                    
                    <div>
                        <span>TOTAL</span>
                        <span>R$ {total}</span>
                    </div>
                </div>
                <div onClick={() => whatsapp(pratos,bebidas,sobremesa,total)} className="botao">
                    <p>Tudo certo, pode pedir!</p>
                </div>
                <Link path="/">                    
                    <div className="cancelar">Cancelar</div>
                </Link>
            </div>  
        </>
        </Router>  
    , document.querySelector(".root"));
}

