
const tiposBasicos = () => {

    //forma de declarar variables puede ser string o nombre
    /* let nombre:string | number ='Agustin' */
    let nombre: string = 'Agustin'


    //arrays
    const poderes: string[] = ['velocidad', 'volar', 'respirar en el agua']

    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre},
            {poderes.join(', ')}
        </>
    )
}

export default tiposBasicos
