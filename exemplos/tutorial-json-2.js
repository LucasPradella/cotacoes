const fs = require('fs');

const pessoa = {
    'nome': 'Lucas',
    'sobrenome': 'Pradella',
    'idade': 29
}

fs.writeFileSync('pessoa.json', JSON.stringify(pessoa)); // escreve arquivo
const pessoaContent = fs.readFileSync('pessoa.json'); // le arquivo

console.log(pessoaContent.toString());