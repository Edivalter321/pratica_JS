let array = [{id:1, nome: "Camisa do Santos", preço:2}, {id:2, nome:"Camisa do Ceará", preço: 999}, {id:3, nome:"Camisa do Fortaleza", preço:999}, {id:4, nome:"Camisa do Flamengo", preço: 1}]

function lista() {
    let corpo = document.querySelector("#item")
    for (let index = 0; index < array.length; index++) {
        let linha = document.createElement("li")
        
        linha.innerHTML = array[index]
        corpo.appendChild(linha)

        
        
        

        
    }
}
