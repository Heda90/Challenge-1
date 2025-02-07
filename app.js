// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
//Aquí deberás desarrollar la lógica para resolver el problema.

//Se crea el array donde se guardaran los nombres.
let listaDeAmigos = [];

function agregarLista(identificador, valor){
    let ul = document.querySelector(identificador);
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(valor));
    ul.appendChild(li);
}

//Se crea la funcion para limpiar la lista.
function limpiarLista(identificador){
    document.querySelector(identificador).innerHTML = "";
}

//Se crea la funcion para agregar los nombres a la lista.
function agregarAmigo(){
    let nombreAmigo = document.querySelector('#amigo');

    //Se comprueba que no este vacio el input.
    if(nombreAmigo.value == ""){
        alert("Por favor, agregue un nombre.");
    }else{
        limpiarLista('#listaAmigos');
        listaDeAmigos.push(nombreAmigo.value);
        for (let amigo in listaDeAmigos){
            agregarLista('#listaAmigos', listaDeAmigos[amigo])
        }
    }
    nombreAmigo.focus();
    nombreAmigo.value = "";
}

//Se crea la funcion para seleccionar al amigo secreto.
function sortearAmigo(){
    limpiarLista('#listaAmigos');
    limpiarLista('#resultado');

    if(listaDeAmigos.length != 0){
        let indice = Math.floor(Math.random() * listaDeAmigos.length);
        agregarLista('#resultado', `Tu amigo secreto es: ${listaDeAmigos[indice]}`);
    }else{
        alert('No hay ningun amigo en las lista.')
    }
}