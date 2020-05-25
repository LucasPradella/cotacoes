const express = require ('express')

const router = new express.Router();

router.post('/tasks', (req, res) => {
    res.status(201).send()
})

router.get('/tasks', (req, res) => {
    const tasks = [{
        name: 'tasks'
    }]
    res.status(200).send(tasks)
})

router.get('/tasks/:id', (req, res) => {
    const task = { name: 'tasks1' }
    res.status(200).send(task)
})

router.patch('/tasks/:id', (req, res) => {
    res.status(200).send()
})

router.delete('/tasks/:id', (req, res) => {
    res.status(200).send()
})




module.exports = router