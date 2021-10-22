const dados = [
    {
        imagem: "img/MontanhaRussaIII.jpg",
        titulo: "Loki  Vs. Wanda Vision",
        subtitulo: "Author: Ana Luiza Cavalcante de Menezes",
        data: "21/10/2021 - 10:00",
        materia: "The highest roller coaster in the world is the Kingda Ka. The height record will be taken from Kingda Ka, whose maximum point reaches 139 meters above ground, and which is located at Six Flags Great Adventure in Jackson, New Jersey. The Saudi toy will reach a maximum height of 160 meters, when the tracks will pass over one of the large natural cliffs that will surround the park.",
        submateria: "And it is one of the coolest roller coasters.The most dangerous roller coaster in the world is Fury 325. Fury 325 can be considered the scariest roller coaster in the world, or at least one of the most extreme on the planet. The toy has wagons with the capacity to carry 32 people at a time on a path that simulates the flight of a wasp. The route is almost two kilometers long and can be done in 3min25s.",
        subimagem: "img/MontanhaRussaIV.jpg"
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