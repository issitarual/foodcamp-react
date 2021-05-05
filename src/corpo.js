import Prato from './prato';
import Bebida from './bebida';
import Sobremesa from './sobremesa';

export default function Corpo(){
    return (
            <div class = "corpo">
                <Prato/>
                <Bebida/>
                <Sobremesa/>
            </div>
        )
}