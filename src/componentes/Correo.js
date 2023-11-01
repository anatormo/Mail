import { useState, useEffect } from 'react';

/*funcion correo, declaramos las variables que necesitamos */
function Correo() {
  const [correo, setCorreo] = useState('');
  const [mensajeError, setMensajeError] = useState('');

/*funcion para manejar el envio con la condicion para el correo*/
  const handleSubmit = (e) => {
    /*evita que la página se recargue y permite que  a la función 
    aplicar la condición sin que desaparezca enseguida el mensaje.
    para rendirizar el mensaje y aplicar uno u otro 
    {mensajeError && <p>{mensajeError}</p>}*/
    e.preventDefault ();
    if (!correo.includes('@')) {
        setMensajeError('Inavalid email address entered!');
    } else{
        setMensajeError ('');
    }
}
  return (
    <div>
      <h1>Your Mail</h1>
     
      <form onSubmit={handleSubmit}>
        <input
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
         <br></br><br></br>
         
        <button type="submit">Submit</button>
      </form>
      {mensajeError && <p>{mensajeError}</p>}
    </div>
  );
}

export default Correo;
