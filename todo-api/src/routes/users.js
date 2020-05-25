const express = require ('express')
const User = require ('../models/users')

const router = new express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id);
        if (!user) {
            res.status(404).send()
        }

        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }

    const user = { name: 'user1' }
    res.status(200).send(user)
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body) // verifica o que esta sendo atualizado
    const allowedUpdates = ['nome', 'password'] // verifica o que é permitido atualizar 
    const iValidOperation = updates.every((updates) => allowedUpdates.includes(updates)) // verificar se realmente é valido essa atualização 

    if(!iValidOperation){
        return res.status(400).send({error:'Esses campos não podem ser atualizados'})
    }

    try {
        const user = await User.findOneAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

        if (!user) {
            res.status(404).send()
        }
        res.status(200).send(user)

    } catch (error) {
        res.status(500).send(error)
    }

    res.status(200).send()
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findOneAndDelete(req.params.id)

        if (!user) {
            res.status(404).send()
        }
        res.status(204).send()

    } catch (error) {
        res.status(500).send(error)
    }
})




module.exports = router