const prod1 = {} // representa um objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.9
prod1['Desconto Legal'] = 0.4 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: { // objeto dentro de outro
        blabla: 1,
        obj: { // objeto dentro de outro
            blala: 2
        }
    }
}

console.log(prod2)

//'{ "nome": "Camisa Polo", "preco": 79.90 }' json example

// Atribuições de objetos em JS são feitas por referência, já atribuições de tipos primitivos é feita a atribuição por valor