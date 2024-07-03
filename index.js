let Vitorias = 355;
let Derrotas = 8;
let Rank = "";

function EloCalc(Vitorias, Derrotas, Rank){
    Vitorias -= Derrotas;

    if (Vitorias <= 10){
        Rank = "Ferro";
        console.log("O Herói tem saldo de " + Vitorias + " está no nível de " + Rank);
    } else if (Vitorias <= 20 && Vitorias >= 11){
        Rank = "Bronze";
        console.log("O Herói tem saldo de " + Vitorias + " está no nível de " + Rank);
    } else if (Vitorias <= 50 && Vitorias >= 21){
        Rank = "Prata";
        console.log("O Herói tem saldo de " + Vitorias + " está no nível de " + Rank);
    } else if (Vitorias <= 80 && Vitorias >= 51){
        Rank = "Ouro";
        console.log("O Herói tem saldo de " + Vitorias + " está no nível de " + Rank);
    } else if (Vitorias <= 90 && Vitorias >= 81){
        Rank = "Diamante";
        console.log("O Herói tem saldo de " + Vitorias + " está no nível de " + Rank);
    } else if (Vitorias <= 100 && Vitorias >= 91){
        Rank = "Lendário";
        console.log("O Herói tem saldo de " + Vitorias + " está no nível de " + Rank);
    } else if (Vitorias >= 101){
        Rank = "Imortal";
        console.log("O Herói tem saldo de " + Vitorias + " está no nível de " + Rank);
    }
}

RankHeroi = EloCalc(Vitorias, Derrotas, Rank);