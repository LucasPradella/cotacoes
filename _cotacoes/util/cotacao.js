const request = require('request')

const cotacao = (symbol, callback) =>{
    const url =`https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=XZM6Zep8JlwleLEF5KngzkkP0dIRap3rkiRFZjQo8RosU2UhwsYIdio0hjbz`;

    request({url: url, json: true}, (err, response) => {
        if (err) {
            console.error(err);
            throw new Error("Nao foi ein  " + err)       
        }


        const parsedJson = response.body

        if (parsedJson === undefined || parsedJson.data  === undefined ) {
            throw new Error(`Ta vazio ein`)
        }
 
        console.log(parsedJson.data)
        const d = parsedJson.data[0]
        const data = {
             symbol: d.symbol,
             description: d.description,
             price: d.price
        }

        callback(data)
    })
}


module.exports ={ 
    cotacao
}