document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI
    const telefono = "573133022732";
  
    const jugador = document.querySelector("#jugador").value;
    const id = document.querySelector("#id").value;
    const edad = document.querySelector("#edad").value;
    const rol = document.querySelector("#rol").value;
    const experiencia = document.querySelector("#experiencia").value;
    const disponibilidad = document.querySelector("#disponibilidad").value;
    const recorrido = document.querySelector("#recorrido").value;
    const liderasgo = document.querySelector("#liderasgo").value;
    const cambio = document.querySelector("#cambio").value;
    const discord = document.querySelector("#discord").value;
    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *_THE MICTLAN FICHA_*%0A
          *INSCRIPCION*%0A%0A
          *NOMBRE*%0A
          ${jugador}%0A
          *ID*%0A
          ${id}%0A
          *EDAD*%0A
          ${edad}%0A
          *ROL*%0A
          ${rol}%0A
          *EXPERIENCIA EN VS*%0A
          ${experiencia}%0A
          *DISPONIBILIAD DE TIEMPO*%0A
          ${disponibilidad}%0A
          *RECORRIDO EN CLANES*%0A
          ${recorrido}%0A
          *LIDERAZGO*%0A
          ${liderasgo}%0A
          *CAMBIO DE NOMBRE*%0A
          ${cambio}%0A
          *DISCORD (OBLIGATORIO)*%0A
          ${discord}%0A`;
  
    if (jugador === "" || id === "" || edad === "" || rol === "" || experiencia === "" || disponibilidad === "" || recorrido === "" || liderasgo === "" || cambio === "" || discord === "") {
      resp.classList.add("fail");
      resp.innerHTML = `FALTAN DATOS ${jugador}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `SE A ENVIADO COMPLETAMENTE, ${jugador}`;
  
    window.open(url);
  });