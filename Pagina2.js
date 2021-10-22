const dados = [
    {
        imagem: "img/ElizabethII.jpg",
        titulo: "Queen Elizabeth II dies",
        subtitulo: "Author: João Pedro Vianna Kida",
        data: "21/10/2021 - 10:00",
        materia: "Yesterday morning soldiers from the royal palace found the queen dead in her quarters, no traces of bodily aggression were found, and the autopsy shows that they had chemical residues in her digestive system, which damaged her respiratory system, causing the queen's death. Authorities who have been investigating the suspected case of North Korean Kim Jong-un, as he has been saying for a while that he was considering trying to dominate England, as the two had a feud behind the camera.The royal guard found a boy who was very apprehensive and they believe they found the murderer of your royal majesty, and if that boy came at the behest of Kim Jong-un there could be a Third World War due to the breach of peace in North Korea.",
        submateria: "The royal guard found a boy who was very apprehensive and they believe they found the murderer of your royal majesty, and if that boy came at the behest of Kim Jong-un there could be a Third World War due to the breach of peace in North Korea.",
        subimagem: "img/ElizabethIII.jpg"
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