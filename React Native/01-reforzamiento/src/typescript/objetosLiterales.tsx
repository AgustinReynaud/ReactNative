
/* Las interfaces son reglas de validacionn a los objetos */
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}
interface Direccion {
    pais: string,
    casaNo: number
}


const objetosLiterales = () => {

    //diferencias entre type,class,interface
    /* class sirve para crear instancias que tienen una representacion en javascript */
    /* interface es mas facil que expandir y no exise en java script al igual que type */
    const persona: Persona = {
        nombreCompleto: 'agustin',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaNo: 615

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
        </>)
}

export default objetosLiterales
