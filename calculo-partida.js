let vitoria=15
let derrota=4
function calcRankeada(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    let rank
    
        if(saldoVitorias<=10){
            rank = "Ferro"
        }
        if(saldoVitorias>10 && saldoVitorias <=20){
            rank = "Bronze"
   
     }else if (saldoVitorias>20 && saldoVitorias<=50){
            rank = "Prata"
     }else if(saldoVitorias >50 && saldoVitorias<=80){
            rank = "Ouro"
     }else if (saldoVitorias>80 &&saldoVitorias<=90){
            rank = "Diamante"
     }else if(saldoVitorias>90 && saldoVitorias<=100){
            rank = "Lendário"
     }else{
            rank = "Imortal"    
    }
    console.log("O Herói tem saldo de "+saldoVitorias+" está no nível "+rank )
}
calcRankeada(vitoria,derrota)