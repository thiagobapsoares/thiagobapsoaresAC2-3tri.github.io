const dados = [
    {
        imagem: "img/GamesVSII.jpg",
        titulo: "Ghost recon wildlands  Vs.  Ghost recon breakpoint",
        subtitulo: "Author: João Pedro Vianna Kida",
        data: "21/10/2021 - 10:00",
        materia: "Ghost recon wildlands and ghost recon breakpoint, as there is a great discussion around this world of ghosts, where most of the community prefers ghost recon wildlands to breakpoint, as it has a better proposal better in history, because in ghost recon wildlands you fight the Santa Blanca cartel in Bolivia, and in breaking point you have to fight other ghosts that are under the command of the walker (a ghost).",
        submateria: "Best of them is the wildlands more for the proposal, the villains, and the gameplay, as the wildlands main boos surpasses the breakpoint in all aspects being a challenging boos in which the player is eager to get there and finally defeat the long awaited El Sueno (boos de wildlands).",
        subimagem: "img/GamesVSIII.jpg"
    }
]

window.addEventListener("DOMContentLoaded", function(){ 
    let ima = [];
    let tit = [];
    let sbt = [];
    let dat = [];
    let mat = [];
    let sbm = [];
    let sbi = [];

    for (let i = 0; i < dados.length;i++){
        ima.push(
            document.querySelector("#ima" + i)
        );
        tit.push(
            document.querySelector("#tit" + i)
        );
        sbt.push(
            document.querySelector("#sbt" + i)
        );
        dat.push(
            document.querySelector("#dat" + i)
        );
        mat.push(
            document.querySelector("#mat" + i)
        );
        sbm.push(
            document.querySelector("#sbm" + i)
        );
        sbi.push(
            document.querySelector("#sbi" + i)
        );
    }
    
    for (let i = 0; i < dados.length;i++){
    ima[i].src       = dados[i].imagem;
    tit[i].innerHTML = dados[i].titulo;
    sbt[i].innerHTML = dados[i].subtitulo;
    dat[i].innerHTML = dados[i].data;
    mat[i].innerHTML = dados[i].materia;
    sbm[i].innerHTML = dados[i].submateria;
    sbi[i].src       = dados[i].subimagem;
    }
});