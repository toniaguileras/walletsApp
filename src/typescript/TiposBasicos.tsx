import React from 'react'

export const TiposBasicos = () => {
    const nombre : string = 'Toni';
    const edad: number = 35;
    const estaActivo: boolean = false;
    const poderes: string[] = ['Volar', 'Correr'];
    return (
        <>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo': 'no activo'}
            <br/>
            {poderes.join()}
            </>
    )
}
