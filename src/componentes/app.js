import Topo from './topo'
import Corpo from './corpo'
import Base from './base'
import React from 'react';

export default function App(){
    const [pratoEscolhido, setPratoEscolhido] = React.useState([]);
    const [bebidaEscolhida, setBebidaEscolhida] = React.useState([]);
    const [sobremesaEscolhida, setSobremesaEscolhida] = React.useState([]);

    return(
        <>
        <Topo/>
        <Corpo  
            prato = {pratoEscolhido}
            funcPrato = {setPratoEscolhido} 
            bebida = {bebidaEscolhida}
            funcBebida = {setBebidaEscolhida}
            sobremesa = {sobremesaEscolhida}
            funcSobremesa = {setSobremesaEscolhida}/>
        <Base prato = {pratoEscolhido} bebida = {bebidaEscolhida} sobremesa = {sobremesaEscolhida}/>
        </>
    )
}