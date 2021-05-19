import { useState } from "react";

export const Contador = () => {
    const [valor, setValor] = useState(10);
    const acumular = (numero: number ) => {
        setValor(valor + numero);
    }
    return (
        <>
            <h3>Contador: <small>{valor}</small></h3> 
       
            <button onClick={() => acumular(1)} className="btn btn-primary"> +1</button>
            <button onClick={() => acumular(-1)} className="btn btn-primary"> -1</button>

        </>
    )
}
