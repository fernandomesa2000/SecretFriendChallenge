// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo');
    if(amigo.value === ''){
        alert('Ingrese un valor válido pa');
        return;
    }
    amigos.push(amigo.value);
    amigo.value = '';

    console.log(amigos)
    actualizarLista();
};

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
};

function sortearAmigo(){
    let resultado = document.getElementById('resultado')
    if(amigos.length == 0){
        resultado.innerHTML = '<li>No hay amigos en la lista pai</li>';
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoGanador = amigos[indiceAleatorio];

    resultado.innerHTML = `${amigoGanador} es el amigo sorteado 🎊`;
}