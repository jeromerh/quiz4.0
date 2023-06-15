usuario1=localStorage.getItem("usuario1")
usuario2=localStorage.getItem("usuario2")
puntuacion1=0
puntuacion2=0
document.getElementById("player1_name").innerHTML=usuario1
document.getElementById("player1_score").innerHTML=puntuacion1
document.getElementById("player2_name").innerHTML=usuario2
document.getElementById("player2_score").innerHTML=puntuacion2
document.getElementById("turno_preguntar").innerHTML="turno para preguntar:"+usuario1
document.getElementById("turno_responder").innerHTML="turno para resonder:"+usuario2

function enviar(){
valor1=document.getElementById("input_1").value
valor2=document.getElementById("input2").value
multiplicacion=parseInt(valor1)*parseInt(valor2) 
console.log(multiplicacion) 

problema="<h4>"+valor1+"*"+valor2+"</h4>"

resultado="respuesta:<input id='resultado'>"

boton_resultado="<button onclick='comprobar()'>comprobar</button>"

contenido=problema + resultado + boton_resultado

document.getElementById("salida").innerHTML=contenido
document.getElementById("input_1").value=""
document.getElementById("input2").value=""


}
function check(){
    respuesta_obtenida=document.getElementById("respuesta").value
    respuesta=respuesta_obtenida.toLowerCase()
   if(respuesta==palabra){
       if(turno_para_responder=="jugador1"){
        player1_puntuacion=player1_puntuacion + 1
        document.getElementById("player1_score").innerHTML=player1_puntuacion
       }
       else{
           player2_puntuacion=player2_puntuacion + 1
           document.getElementById("player2_score").innerHTML=player2_puntuacion  
       }
   }
   if(turno_para_preguntar=="jugador1"){
      turno_para_preguntar="jugador2"
      document.getElementById("player_question").innerHTML="turno para preguntar " + player2
   }
   else{
       turno_para_preguntar="jugador1"
       document.getElementById("player_question").innerHTML="turno para preguntar " + player1   
   }
   
   if(turno_para_responder=="jugador1"){
       turno_para_responder="jugador2"
       document.getElementById("player_answer").innerHTML="turno para responder " + player2
    }
    else{
        turno_para_responder="jugador1"
        document.getElementById("player_answer").innerHTML="turno para responder " + player1   
    }
    
    document.getElementById("output").innerHTML=""
   }


