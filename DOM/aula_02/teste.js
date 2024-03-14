let array = ["banana","acerola","goiaba"];

function pesquisar() {
    let topo = document.querySelector("#container")
    let titulo = document.createElement("h1")

    titulo.innerHTML = "Lista de preços de camisas de times brasileiros";
    
    topo.appendChild(titulo)

    for (let i = 0; i < array.length; i++) {
        
        let lista = document.createElement("li")

        lista.innerHTML = array[i]

        topo.appendChild(lista)

    }
    
}

function remover() {

    let topo = document.querySelector("#container")
    let titulo = document.querySelector("h1")
    let lista = document.querySelector("li")

    topo.removeChild(titulo)
    topo.removeChild(lista)
}
    