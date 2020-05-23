const pessoa = {
    'nome': 'Lucas',
    'sobrenome': 'Pradella',
    'idade': 29
}

const objetoToJson =  JSON.stringify(pessoa);
const jsonToObjeto = JSON.parse(objetoToJson);

console.log(pessoa)
console.log(objetoToJson)
console.log(jsonToObjeto)


