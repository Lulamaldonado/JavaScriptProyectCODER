function loging () {
  
let usuarioIngresado = prompt("Ingresar nombre");

if (usuarioIngresado !== "") {
 

 alert ("Bienvenido " + usuarioIngresado)}

 else{
    alert ("error, no reconoce usuario")

  }
} 

function actividades (){
  
  let funcional = prompt("Clases de Funcional");

  if (funcional == "si"){
    alert ("Agenado para funcional :)")
  } else{
    alert("no quedo agenadado :(")
  }


}

function actividades1 (){
  
  let nadomarabierto = prompt("Clases de Nado a mar abierto");

  if (nadomarabierto == "si"){
    alert ("Agenado para Nado a mar abierto :)")
  } else{
    alert("no quedo agenadado :(")
  }


}

function actividades2 (){
  
  let ciclismo = prompt("Clases de ciclismo");

  if (ciclismo == "si"){
    alert ("Agenado para ciclismo :)")
  } else{
    alert("no quedo agenadado :(")
  }


}
 
 
loging()
actividades()
actividades1()
actividades2()
