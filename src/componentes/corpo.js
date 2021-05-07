import Prato from './prato';
import Bebida from './bebida';
import Sobremesa from './sobremesa';

export default function Corpo(props){
    const {sobremesa, funcSobremesa, bebida, funcBebida, prato, funcPrato, pratoQtd, bebidaQtd, sobremesaQtd} = props;

    return (
            <div className = "corpo">
                <Prato 
                    escolhido = { prato }
                    funcEscolhido = {funcPrato}
                    pratoQtd = {pratoQtd}
                    />
                  
                <Bebida 
                    escolhido = { bebida }
                    funcEscolhido = {funcBebida}
                    bebidaQtd = {bebidaQtd}
                    />
                <Sobremesa 
                    escolhido = { sobremesa }
                    funcEscolhido = {funcSobremesa}
                    sobremesaQtd = {sobremesaQtd}
                />
            </div>
        )
}