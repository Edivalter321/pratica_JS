function generateHtml() {
    let topo = document.querySelector("#container");
    
    let titulo = document.createElement("h1");
    let link1 = document.createElement("a");
    let link2 = document.createElement("a");
    let paragrafo1 = document.createElement("p");
    let paragrafo2 = document.createElement("p");

    link1.classList.add("ancora1")
    link2.classList.add("ancora2")
    paragrafo1.classList.add("classe1")
    paragrafo2.classList.add("classe2")

    titulo.innerHTML="Edivalter";
    link1.innerHTML = "Sobre Mim";
    link2.innerHTML = "Contato";
    paragrafo1.innerText = "Sou desenvolvedor Full Stack, com 10 anos de experiência na área de front end";
    paragrafo2.innerText = "contato:(85)99323-2321";

    topo.appendChild(titulo);
    topo.appendChild(link1);
    topo.appendChild(link2);
    topo.appendChild(paragrafo1);
    topo.appendChild(paragrafo2);

}

function limpar () {

    
    let topo = document.querySelector("#container");
   
    let paragrafo1 = document.querySelector(".classe1");
    let paragrafo2 = document.querySelector(".classe2");

    let titulo = document.querySelector("h1");
    let link1 = document.querySelector(".ancora1");
    let link2 = document.querySelector(".ancora2");
    topo.removeChild(titulo);
    topo.removeChild(link1);
    topo.removeChild(link2);
    topo.removeChild(paragrafo1);
    topo.removeChild(paragrafo2);
}
