import p1 from "/cuidado.webp"
import { BandDiv } from "./style"

function Band(){

    return(
        <BandDiv>
            <h3>Saúde em Segurança, Informação em Tempo Real.</h3>
            <div className="container">
                <img src={p1} alt="" />
            </div>
        </BandDiv>
    )
} 
export default Band