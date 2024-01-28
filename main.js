function loging () {
  
let usuarioIngresado = prompt("Ingresar nombre");

if (usuarioIngresado !== "" ) {
 
 alert ("Bienvenido " + usuarioIngresado)
 console. log (usuarioIngresado)}

 else{
    alert ("error, no reconoce usuario")

  }
} 





function actividades (){
  
  let funcional = prompt("Quiere asistir a clase de Funcional?");

  if (funcional == "si"){
    alert ("Agenado para funcional :)")
  
  } else{
    alert("no quedo agenadado :(")
  }





}

function actividades1 (){
  
  let nadomarabierto = prompt("Quiere asistir a clase de Nado a mar abierto?");

  if (nadomarabierto == "si"){
    alert ("Agenado para Nado a mar abierto :)")
  } else{
    alert("no quedo agenadado :(")
  }


}

function actividades2 (){
  
  let ciclismo = prompt("Quiere asistir a clase de ciclismo?");

  if (ciclismo == "si"){
    alert ("Agenado para ciclismo :)")
  } else{
    alert("no quedo agenadado :(")
  }


}

const agendado = function (actividades,actividades1, actividades2)

if(funcional == "si"){
  console.log ("agendado funcional")
}


/*actividades.concat(actividades1)
console.log(agendado) */
 
loging()
actividades()
actividades1()
actividades2()
agendado()
