const request = require('request')

const url ='https://api.worldtradingdata.com/api/v1/stock?symbol=PETR4.SA&api_token=XZM6Zep8JlwleLEF5KngzkkP0dIRap3rkiRFZjQo8RosU2UhwsYIdio0hjbz';


request({url: url}, (err, response) => {
    const parsedJson = JSON.parse(response.body)
    console.log(parsedJson.data[0].stock_exchange_long)
})



request({url: url, json: true}, (err, response) => {
    console.log(response.body)
})