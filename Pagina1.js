const dados = [
    {
        imagem: "img/ElizabethI.jpg",
        titulo: "Queen Elizabeth II",
        materia: "Yesterday morning soldiers from the royal palace found the queen dead in her quarters, no traces of bodily aggression were found, and the autopsy shows that they had chemical residues in her digestive system, which damaged her respiratory system, causing the queen's death."
    },
    {
        imagem: "img/MontanhaRussaI.jpg",
        titulo: "Kingda Ka  Vs. Fury 325",
        materia: "The Kingda Ka is currently the tallest roller coaster in the world, reaching 139 meters in height, and reaching speeds of up to 206 km/h. The ride lasts up to 56 seconds and the length is 950.4 meters. Fury 325 is a steel roller coaster located at Carowinds amusement park in Charlotte, North Carolina. And it's one of the most dangerous roller coasters currently."
    },
    {
        imagem: "img/WVxLokiI.jpg",
        titulo: "Loki  Vs. Wandavision",
        materia: "Wandavison living perfect suburban lives, Wanda and Visão begin to suspect that not everything is what it seems. Loki, God of Cheating, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Ultimatum."
    },
    {
        imagem: "img/MontanhaRussaII.png",
        titulo: "Kingda Ka  Vs. Fury 325",
        materia: "The Kingda Ka is currently the tallest roller coaster in the world, reaching 139 meters in height, and reaching speeds of up to 206 km/h. The ride lasts up to 56 seconds and the length is 950.4 meters. Fury 325 is a steel roller coaster located at Carowinds amusement park in Charlotte, North Carolina. And it's one of the most dangerous roller coasters currently."
    },
    {
        imagem: "img/WVxLokiI.jpg",
        titulo: "Loki  Vs. Wandavision",
        materia: "Wandavison living perfect suburban lives, Wanda and Visão begin to suspect that not everything is what it seems. Loki, God of Cheating, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Ultimatum."
    },
    {
        imagem: "img/GamesVSI.png",
        titulo: "Ghost recon wildlands  Vs.  Ghost recon breakpoint",
        materia: "Tom Clancy's Ghost Recon Wildlands is a tactical shooting game that is set in Bolivia. The game will not be futuristic unlike its predecessors such as Advanced Warfighter or Future Soldier.Tom Clancy's Ghost Recon Breakpoint is a military shooter set in a diverse open world. Wounded, unsupported and hunted by ex-Ghosts, you must fight to survive while lost in Auroa."
    },
    {
        imagem: "img/GamesVSI.png",
        titulo: "Ghost recon wildlands  Vs.  Ghost recon breakpoint",
        materia: "Tom Clancy's Ghost Recon Wildlands is a tactical shooting game that is set in Bolivia. The game will not be futuristic unlike its predecessors such as Advanced Warfighter or Future Soldier.Tom Clancy's Ghost Recon Breakpoint is a military shooter set in a diverse open world. Wounded, unsupported and hunted by ex-Ghosts, you must fight to survive while lost in Auroa."
    },
    {
        imagem: "img/GamesVSI.png",
        titulo: "Ghost recon wildlands  Vs.  Ghost recon breakpoint",
        materia: "Tom Clancy's Ghost Recon Wildlands is a tactical shooting game that is set in Bolivia. The game will not be futuristic unlike its predecessors such as Advanced Warfighter or Future Soldier.Tom Clancy's Ghost Recon Breakpoint is a military shooter set in a diverse open world. Wounded, unsupported and hunted by ex-Ghosts, you must fight to survive while lost in Auroa."
    },
]


window.addEventListener("DOMContentLoaded", function(){ 
    let ima = [];
    let tit = [];
    let mat = [];

    for (let i = 0; i < dados.length;i++){
        ima.push(
            document.querySelector("#ima" + i)
        );
        tit.push(
            document.querySelector("#tit" + i)
        );
        mat.push(
            document.querySelector("#mat" + i)
        );
    }

    for (let i = 0; i < dados.length;i++){
    ima[i].src       = dados[i].imagem;
    tit[i].innerHTML = dados[i].titulo;
    mat[i].innerHTML = dados[i].materia;
    }
});