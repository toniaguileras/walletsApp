
interface Direccion{
    pais:string;
    numero: number;
}
interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion; 
}
export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Toni',
        edad: 23,
        direccion: {
            pais: 'España',
            numero: 23
        }
    }
    return (
        <>
        <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
