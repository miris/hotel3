// JavaScript Document
/*function $(){//con el signo de pesos se hace referencia a jQuery

}
$('document');//selecciona a todo el documento
$('id');//Seleccionamos a un id del documento
$('#');//Seleccionamos un elemnto del documento
$('.class');//seleccionamos al elemento de la clase*/
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		window.location.href='#login';
	$('#regEnviar').tap(function(){//tap es similar aclick solo que más rapido	
	var nom=$('#regNom').val();
	var email=$('#regMail').val();
	var tel=$('#regTel').val();
	if(nom!="" && email!="" && tel!=""){
		navigator.notification.confirm("Nombre: "+nom+"\nEmail: "+email+"\nTeléfono: "+tel, function(botones){
		switch(botones){
		case 1:
		navigator.notification.beep(5);
		break;
		case 2:
		navigator.notification.vibrate(500);
		break;
		}
		}, "Titulo", "Beep, Vibrar, Salir" );
	}else{
	navigator.notification.alert('Todos los campos son requeridos', null, "Error de registro","Aceptar");	
	}
	});
}, false);
});
