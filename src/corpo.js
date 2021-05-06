import Prato from './prato';
import Bebida from './bebida';
import Sobremesa from './sobremesa';

export default function Corpo(props){
    const {sobremesa, funcSobremesa, bebida, funcBebida, prato, funcPrato} = props;

    return (
            <div class = "corpo">
                <Prato 
                    escolhido = { prato }
                    funcEscolhido = {funcPrato}/>
                <Bebida 
                    escolhido = { bebida }
                    funcEscolhido = {funcBebida}/>
                <Sobremesa 
                    escolhido = { sobremesa }
                    funcEscolhido = {funcSobremesa}/>
            </div>
        )
}