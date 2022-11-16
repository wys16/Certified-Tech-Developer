const adicionar = (x,y) => {
    return x+y;
}

const subtracao = (x,y) => {
    return x-y;
}


const multiplicacao = (x,y) =>{
    return x*y;
}

const divisao = (x,y) => {
    return x/y;
}

console.log('------------Teste de Operapções/ calculadora----------')
console.log(`Função de soma:${adicionar(2,2)}`);
console.log(`Função de subtração:${subtracao(8,7)}`);
console.log(`Função de multiplicaçao:${multiplicacao(2,2)}`);
console.log(`Função de divisão:${divisao(6,3)}`);
console.log(`Função teste zero divisão:${divisao(0,8)}`);
console.log(`Função teste zero divisão:${divisao(8,0)}`);

const quadradoDoNumero = (x) => {
    let quadrado = multiplicacao(x,x);
    return quadrado;
}

const mediaDeTresNumeros = (x,y,z) => {
     let soma =  adicionar(adicionar(x,y),z);
    let media = divisao(soma,3);
     return media;
 }


 const calcularPorcentagem = (x,y) => {
    let valor =  multiplicacao(x,y);
   let resultado = divisao(valor,100);
    return resultado;
}

const porcentagem = (x,y) => {
    let valor1 =  divisao(x,y);
   let resultado1 = multiplicacao(x,100);
    return resultado1;
}
console.log(`Função de soma:${quadradoDoNumero(10)}`);
 console.log(`Função de media:${mediaDeTresNumeros(6,7,8)}`);
 console.log(`Calcular porcentagem:${calcularPorcentagem(60,70)}`);
 console.log(`porcentagem:${calcularPorcentagem(60,80)}`);

 