
let saldo = saldoVitoria(11,100)
function saldoVitoria(vitoria,derrota){
    saldoTotal = vitoria - derrota
    return saldoTotal

}

if (saldo <= 10){
    console.log("O Herói tem de saldo de: "+ saldo + " vitorias e está no nível de: Ferro" );
}else if(saldo <=20){
    console.log("O Herói tem de saldo de: "+ saldo + " vitorias e está no nível de: Bronze" );
}else if(saldo <= 50){
    console.log("O Herói tem de saldo de: "+ saldo + " vitorias e está no nível de: Prata" );
}else if(saldo <=80){
    console.log("O Herói tem de saldo de: "+ saldo + " vitorias e está no nível de: Ouro" );
}else if(saldo <=90){
    console.log("O Herói tem de saldo de: "+ saldo + " vitorias e está no nível de: Diamante" );
}else if(saldo <=100){
    console.log("O Herói tem de saldo de: "+ saldo + " vitorias e está no nível de: Lendário" );
}else
    console.log("O Herói tem de saldo de: "+ saldo + " vitorias e está no nível de: Imortal" );
