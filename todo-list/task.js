
const fs = require('fs')

const addTask = function (name) {

    debugger

    const tasks = loadAllTasks();
    console.log(tasks);

    const duplicateTasks = tasks.find(function(task){
        return task.name === name 
    })

    console.log(`Retorno do duplicateTasks -> ${ JSON.stringify(duplicateTasks) }`)
    if (!duplicateTasks) {
        const newTask = {
            name
        };
    
        tasks.push(newTask)
        saveTask(tasks);        
    } else {
        console.log('Duplicate Name')
    }

    

}

const saveTask = function(task) {
    fs.writeFileSync('task.json', JSON.stringify(task));
}

const loadAllTasks = function () {
    // ler todas as tarefas
    try {
        return JSON.parse(fs.readFileSync('task.json').toString())
    } catch (error) {
        return [];
    }

}



module.exports = {
    addTask
}