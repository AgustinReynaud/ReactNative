

const funciones = () => {
   /* siempre en la funcion poner el tipo de dato asi no hay warnings */
    const sumar =():number=>{

        return 1+2
    }
   
    return (
        <>
          <h3>Funciones</h3>
          <span>El resultado es :{sumar()}</span>  
        </>
    )
}

export default funciones
