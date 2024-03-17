//Obtiene los elementos del DOM
var botonEncriptar = document.getElementById('boton-encriptar');
var botonDesencriptar = document.getElementById('boton-desencriptar');

// Agregar eventos de clic a los botones
botonEncriptar.addEventListener('click', encriptar);
botonDesencriptar.addEventListener('click', desencriptar);

function obtenerMensaje(){
	return document.getElementById('mensaje').value;
}

function encriptar(){
	var mensaje = new String(obtenerMensaje());
	var encriptacion = ''
	for(let c of mensaje){
		switch(c){
			case 'a':
				encriptacion+= 'enter'
				break;
			case 'e':
				encriptacion+= 'imes'
				break;
			case 'i':
				encriptacion+=  'ai'
				break;
			case 'o':
				encriptacion+= 'ober'
				break;
			case 'u':
				encriptacion+= 'ufat'
				break;
			default:
				encriptacion+=c
				break;
		}
	}
	//document.getElementById("encriptacion").value = encriptacion;
	console.log(encriptacion);
	mostrarInfo(encriptacion);
}

function desencriptar(){
	var encriptacion =  new String(obtenerMensaje());
	var sol = ((((encriptacion.replace(/enter/g, 'a')).replace(/imes/g, 'e')).replace(/ai/g, 'i')).replace(/ober/g, 'o')).replace(/ufat/g, 'u');
	console.log(sol);
	//document.getElementById("encriptacion").value = sol;
	mostrarInfo(sol);
}


//Funcionalidad para copiar el contenido de las celdas
document.querySelector('#boton-copiar').addEventListener('click', copy);

function copy() {
  let copyText = document.querySelector('#encriptacion').value;

  navigator.clipboard.writeText(copyText)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('Error al copiar el texto al portapapeles', err);
    });
}

function mostrarInfo(texto){
	console.log('Ingresa al bloque de mostrar texto');
	texto = new String(texto);
	var textarea = document.getElementById('encriptacion');
	var mensajeContenedor = document.querySelector('.sinmensaje');

	if(texto && texto.trim() != null){
		textarea.value = texto;
		textarea.style.display = 'block';
		mensajeContenedor.style.display = 'none';

	}

}