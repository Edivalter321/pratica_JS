// toString

//let frutas = ["Banana", "Acerola", "Goiaba"]
//console.log(frutas.toString())

// join

//let frutas = ["Banana","Caju","Goiaba"]
//console.log(frutas.join(" - "))

// pop

// push

//let frutas = ["banana", "acerola", "caju", "goiaba"]
//let comidas = ["salada", "vitamina", "arroz", "feijao"]
//console.log(frutas.pop())
//console.log(frutas)

//console.log(frutas.push("kiwi"))
//console.log(frutas)

// concat

//let newArray = frutas.concat(comidas)
//console.log(newArray)
/*
let produtos = [
    {
        id:1,
        nome:"raquete",
        preco:40.00
    },
    {
        id:2,
        nome:"tenis",
        preco:120.00
    },
    {
        id:3,
        nome:"camisa",
        preco:80.00
    },
    {
        id:4,
        nome:"meia",
        preco:20.00
    },
    {
        id:5,
        nome:"short",
        preco:60.00
    },
    {
        id:6,
        nome:"oculos",
        preco:100.00
    }
]
let newArray = []
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].preco >= 80.00) {
        newArray.push(produtos[i])
        
    }
    
}
console.log(newArray)
console.log(produtos)
*/
/*let frutas = ["acerola", "caju", "banana"]
//console.log(frutas.toString())

//console.log(frutas.pop())
frutas.push("pitomba")
console.log(frutas)
*/
let produtos = [
    {
        id:1,
        nome:"raquete",
        preco:40.00
    },
    {
        id:2,
        nome:"tenis",
        preco:120.00
    },
    {
        id:3,
        nome:"camisa",
        preco:80.00
    },
    {
        id:4,
        nome:"meia",
        preco:20.00
    },
    {
        id:5,
        nome:"short",
        preco:60.00
    },
    {
        id:6,
        nome:"oculos",
        preco:100.00
    }
]
//let newArray = []
//for (let index = 0; index < produtos.length; index++) {
//    if (produtos[index].id == 6 ) {
        //newArray.push(produtos[index])
//    }
//}

//console.log(newArray)

function getByAd(id) {
    for (let i = 0; i < produtos.length; i++) {
        if(produtos[i].id === id) {
            console.log(produtos[i])
        
    }
    console.log("Produto não  encontrado")
    
}
getByAd(3)