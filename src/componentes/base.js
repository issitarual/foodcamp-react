import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import Revisar from './revisar'


export default function Base(props){
    const {prato, bebida, sobremesa} = props

    let retorno = OpcoesSelecionadas(prato, bebida, sobremesa);
    
    return( 
        <Router>     
            <div className ="base">
                <div className = {retorno ? "verde" : "cinza"}>
                    <Link onClick={e => retorno? null: e.preventDefault()} to="/revisar">                    
                        <p>{retorno ? "Fechar Pedido" : "Selecione 3 itens para continuar"}</p>
                    </Link>
                </div>
                <Switch>
                    <Route path="/revisar">
                        <Revisar 
                            arrayPratos = {prato}
                            arrayBebidas = {bebida}
                            arraySobremesa = {sobremesa}
                            pratos = {prato.map(n=> `${n.prato} (${n.quantidade}x)\n`)} 
                            bebidas = {bebida.map(n=> `${n.prato} (${n.quantidade}x)\n`) } 
                            sobremesa = {sobremesa.map(n=> `${n.prato} (${n.quantidade}x)\n`)}
                            total = {(prato.map(n => (parseInt(n.valor.replace(',','.')))*n.quantidade).reduce((total, numero) => total + numero, 0)
                                + bebida.map(n => (parseInt(n.valor.replace(',','.')))*n.quantidade).reduce((total, numero) => total + numero, 0)
                                +sobremesa.map(n => (parseInt(n.valor.replace(',','.')))*n.quantidade).reduce((total, numero) => total + numero, 0)).toFixed(2)}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>  

    )
}

function OpcoesSelecionadas(prato, bebida, sobremesa){
    return (prato.length > 0 && bebida.length > 0 && sobremesa.length > 0)? true: false;
}
