
    var valor1 = 0
    var valor2 = 0

    var multiplica = function(){
        alert(valor1 * valor2)
    }

    var suma = function(){
        alert(valor1 + valor2)
    }

    var resta = function(){
        alert(valor1 - valor2)
    }

    var divide = function(){
        alert(valor1 / valor2)
    }

    var obtener = function(){
        console.log('obteniendo datos')
        var a = document.getElementById('numero1').value
        var b = document.getElementById('numero2').value
        valor1 = parseInt(a);
        valor2 = parseInt(b);
    }

    for (var index = 0; index < 6; index++){
        console.log("!Hola, Mundo!" + index)

    } 

// ejemplo tabla de multiplicar
    for (var index = 0; index < 11; index++){
        console.log("5"+" x " + index + " = " + (5*index))

    }

// esta condicion nos va a mostrar solo una vez el console, ya que rompimos el ciclo al asignarle un nuevo valor
    var dato1 = 100;
    while (dato1 < 120) {
            console.log('Imprimir')
            dato1 = 5000000;        
    }
//Condiciona hasta que el valor de la variable incremente hasta ser mayor que 110
    var dato2 = 100;
    while (dato2 < 110) {
            console.log('Imprimir')
            dato2 = dato2 + 1;
    }
//Condiciona variables string
    var nombre = '';
    while (nombre == '') {
        console.log('Imprimir')
        nombre = 'john'
        console.log(nombre)
    }

//Condiciona variables booleanas
    var booestado = true;
    while (booestado) {
        console.log('Imprimir')
        booestado = false;
        console.log(booestado)
    }

// Booleanocondicionado con un contador

    // var booEstado = true;
    // var contador = 0;

    // while (booEstado = true) {
    //     console.log('Imprimir')
    //     contador = contador + 1;
    //     if (contador == 5) {
    //         booEstado = false;
    //         console.log(booEstado)

    //     }

    // }
    //no funciono :(
// utilizacion  de switch, es una version mas completa del if
// muestra el valor del dato en este caso 200
var dato3 = 200;
switch (dato3) {
    case 100:
        console.log('El valor es 100')
        break;
    case 200:
        console.log('El valor es 200')
        break;
    case 300:
        console.log('El valor es 300')
        break;
    default:
        console.log('Ninguno')
        break;
}

//mismo proceso anterior pero con una variable de aumento, y una funcion
var dato4 = 100;
var analizar = function(){
    switch (dato4) {
    case 100:
        console.log('El valor es 100')
        break;
    case 200:
        console.log('El valor es 200')
        break;
    case 300:
        console.log('El valor es 300')
        break;
    default:
        console.log('Ninguno')
        break;
} 
    dato4 = dato4 + 100
}

//mismo proceso anterior pero con una variable de aumento, y una funcion, con condicional if
var dato5 = 100;
var analizar2 = function(){
    if (dato5 == 100) {
        console.log('100')   
    }

    if(dato5 == 200) {
        console.log('200')   
    }

    if(dato5 == 300) {
        console.log('300')   
    }
    if (dato5 != 100 && dato5 != 200 && dato5 != 300){
        console.log('ninguno')   
    }
    dato5 = dato5 + 100
}

//array con variables numericas
var listadedatos = [0,1,2,3,4,5,6,100];
console.log(listadedatos)
//array con vaiables string, muestra el dato en la posicion 2
var listadedatos1 = ['john','juan','pedro'];
console.log(listadedatos1[1])
//array con registros
//se realizan 3 registros con diferentes datos:
var registro1 = {nombre:'Wendy',apellidos:'Colmenares',edad:18}
var registro2= {nombre:'Samantha',apellidos:'Cordoba',edad:23}
var registro3 = {nombre:'Luis',apellidos:'Castillo',edad:8}
//se crea el array, llamando a cada registro:
var listadedatos2 = [registro1,registro2,registro3]
console.log(listadedatos2)
console.log(listadedatos2[1].apellidos)
//array con inyeccion de dats por medio de push
var listadedatos3 = [];
listadedatos3.push('Wendy')
listadedatos3.push('Rosa')
listadedatos3.push('Nayelly')
console.log(listadedatos3)

var listadedatos4 = [];
//obtener informacion por medio de un input atra vez de id
// var agregarinformacion = function(){
//     var nombre = document.getElementById('minombre').value
//     listadedatos4.push(nombre)
//     console.log(listadedatos4)
// }
//obtener informacion por medio de un input atra vez del nombre de la clase
var agregarinformacion2 = function(){
    var nombre = document.getElementsByClassName('pruebax')[1].value
    console.log(nombre)
    listadedatos4.push(nombre)
    console.log(listadedatos4)
}
//mostrar informacion, insertando fragmento codigo o texto, atravez de inner
//ejecutar una funcion en la misma
// var contenedor = document.getElementById('contenedordedatos')
// contenedor.innerHTML = "<h1 onclick='agregarinformacion()'>!Hola, Mundo!</h1>"

//insercion de datos a una lista, por medio de una funcion e innerHtml
var contenedor = document.getElementById('contenedordedatos')
var listadedatos5 = [];
var agregarinformacion3 = function () {
    var nombre = document.getElementById('minombre').value
    listadedatos5.push(nombre)

    contenedor.innerHTML = ''
    for (var a = 0; a < listadedatos5.length; a++ ){

        if (listadedatos5[a] != 'Wendy') {
            contenedor.innerHTML = contenedor.innerHTML + ''+listadedatos5[a] +'<br>'   
        }
        else{
            contenedor.innerHTML = contenedor.innerHTML + 'Colmenares <br>' 
        }
        
        console.log(listadedatos5[a])
    }

    
}
//inyeccion de datos numericos
var tabla = document.getElementById('tablademultiplicar')

for (var a = 0; a < 10; a++){
    tabla.innerHTML = tabla.innerHTML + '5 x '+ a +' = '+(5*a)+'<br>'
}

//inyeccion de codigo fuente, con array datos tipo string
var datox = [];
datox.push('Wendy')
datox.push('Mindi')
datox.push('Florecita')

for (var a = 0; a < datox.length; a++){
    tabla.innerHTML = tabla.innerHTML + datox[a]+' <br>'
}

//lo mismo pero anidado en funciones diferente
function agregarcontenido() {
    var datox = [];
    datox.push('Wendy')
    datox.push('Mindi')
    datox.push('Florecita')
    
}

function mostrardatos() {
    tabla.innerHTML = ''
    for (var a = 0; a < datox.length; a++){
        tabla.innerHTML = tabla.innerHTML + datox[a]+' <br>'
    }

}
