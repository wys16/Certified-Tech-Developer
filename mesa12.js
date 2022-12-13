const alice = [23, 69, 32];
const bob = [20, 67, 43];

let encontrarGanhador = function(x, y){
    let pontosAlice = 0;
    let pontosBob = 0;

    for (let i = 0; i < x.length; i++){
        if(x[i] > y[i]){
            pontosAlice +=1;
        }
        else if(x[i] < y[i]){
            pontosBob +=1;
        }
    }

    if(pontosAlice > pontosBob){
        const ganhadora = ' Alice';
        return ganhadora;
    }
    else if (pontosAlice < pontosBob){
        const ganhador = ' Bob';
        return ganhador;
    }
    else{
        const ganhador = 'Empate';
        return ganhador;
    }

}

console.log(`O ganhador ou a ganhadora é: ${encontrarGanhador(alice, bob)}`);