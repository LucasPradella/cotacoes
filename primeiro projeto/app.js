console.log('Vai Corinthians');


const count = 5;
console.log('count: %d', count)
console.log('count:', count)
console.log(`count: ${count + 1}`)  // interpolando strings 


console.time('1000-iteracoes');
for(let i = 0; i < 1000; i++){
    for(let J = 0; J < 1000; J++){
            const a = 10;
            const b = 2;
            const resultado = a * b + i
        //    console.log(resultado);
    }
}
console.timeEnd('1000-iteracoes');
