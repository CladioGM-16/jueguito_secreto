let lista_numeros = [];
let numerosecreto = numero_secreto();
let contador = 1;

console.log(numerosecreto);

function intentodeUsuario(){
    let n_usuario=parseInt(document.getElementById('num_usuario').value);
    
    console.log(numerosecreto == n_usuario);
    if(numerosecreto == n_usuario){
        asignar_texto_elemento('p', 'El numero secreto era ' + numerosecreto
            + ' y lo adivinaste en el ' + contador  
            + (contador == 1 ? '  inteto' : ' intentos')
        );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numerosecreto > n_usuario){
            asignar_texto_elemento('p', 'El numero secreto es mayor');
        }else{
            asignar_texto_elemento('p', 'El numero secreto es menor');
        }
        contador++;
        limpiar();
    }
    return;

}
function reiniciar_juego(){
    asignar_texto_elemento('h1', 'Juego secreto');
    asignar_texto_elemento('p', 'Pone un numero carajo chamo');
    limpiar();
    numerosecreto=numero_secreto();
    contador=1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limpiar(){
    document.querySelector('#num_usuario').value='';
}

function numero_secreto(){
    console.log(lista_numeros);
    let numero = Math.floor(Math.random() * 5) + 1;
    console.log(numero);
    if(lista_numeros.length == 5){
        asignar_texto_elemento('h1', 'Se sorteo todos los numeros');
        document.getElementById('reiniciar').setAttribute('disabled', true);
        document.getElementById('intentar').setAttribute('disabled', true);
    }else{
        if(lista_numeros.includes(numero)){
        return numero_secreto();
        }else{
            lista_numeros.push(numero);
            return numero;
        }
    }   
}

function asignar_texto_elemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

asignar_texto_elemento('h1', 'Juego secreto');
asignar_texto_elemento('p', 'Pone un numero carajo chamo');