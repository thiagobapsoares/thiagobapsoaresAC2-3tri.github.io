const dados = [
    {
        imagem: "img/WVxLokiII.jpg",
        titulo: "Loki  Vs. Wanda Vision",
        subtitulo: "Author: Ana Luiza Cavalcante de Menezes",
        data: "21/10/2021 - 10:00",
        materia: "Loki, God of Cheating, steps out of his brother's shadow to embark on an adventure that takes place after the events of 'Avengers: Ultimatum'. Tell part of Loki story, from his point of view, will have adventure, romance, self discovery, and more. The marvel fans will be crazy about the series, gonna be a big surprise.",
        submateria: "WandaVision living perfect suburban lives, Wanda, and Vision begin to suspect that not everything is what it seems. Will tell about their lives,  after 'Avenger: Ultimatum', and few months later too. Going to focus more on Wanda, we are going to found out about her past. Loki managed to surpass Wanda vision and was one of the most watched series, And WandaVision make a connection with Loki makes a connection with all MARVEL new phase.",
        subimagem: "img/WVxLokiIII.jpg"
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