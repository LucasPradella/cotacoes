


const getPrice = (symbol, callback) => {
    setTimeout(() => {
        const data = {
            symbol: symbol,
            price: 38
        }

        callback(data)
    }, 2000)
}



getPrice('PETR4.SA', (data) => {
    console.log(data)
})