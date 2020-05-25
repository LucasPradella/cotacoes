const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('Users', {
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email invalido')
            }
        }
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minLength: 7,
        validate(value){
            if(value.toLowerCase().includes('senha')){
                throw new Error('Senha invalida')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value <= 0){
                throw new Error('Idade invalida')
            }
        }
    },
})

module.exports = User