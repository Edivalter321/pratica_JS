    let array = ["gol","palio","siena","pegeout","strada","saveiro","corolla"]

    
    function listar() {
        let lelis = document.querySelector("#liista")

        for (let index = 0; index < array.length; index++) {
            let listo = document.createElement("li")

            listo.innerHTML = array[index]
            lelis.appendChild(listo)
            
        }
        
    }
    listar()

    function cadastrar() {
        let valorInput = document.querySelector("#valorInput").value
        let lelis = document.querySelector("#liista")
        lelis.innerHTML = ""
        

        array.push(valorInput)

        listar()
        
        
    }
    function apagar() {
        let valorInput = document.querySelector("#valorInput").value
        let lelis = document.querySelector("#liista")
        lelis.innerHTML = array[index]

        array.pop(valorInput)
        
        listar()
        
    }
    