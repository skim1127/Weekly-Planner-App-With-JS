// DEPENDENCIES
const tasks = require('express').Router();
const db = require('../models')
const { Checklist, Task } = db


// FIND ALL TASKS
tasks.get('/', async (req, res) => {
    try {
        const foundTasks = await Task.findAll({
            include: [
                {
                    model: Checklist,
                    as: "checklists"
                }
            ]
        })
        res.status(200).json(foundTasks)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC TASK
tasks.get('/:id', async (req, res) => {
    try {
        const foundTask = await Task.findOne({
            where: { task_id:req.params.id },
            include: [
                {
                    model: Checklist,
                    as: "checklists"
                }
            ]
        })
        res.status(200).json(foundTask)
    }
    catch (error) {
        res.status(500).json(error)
    }
})    

// CREATE A NEW TASK
tasks.post('/', async (req, res) => {
    try {
        const newTask = await Task.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new task',
            data: newTask
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
    


// UPDATE A TASK
tasks.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.update(req.body, {
            where: {
                task_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedTask} task(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A TASK
tasks.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.destroy({
            where: {
                task_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedTask} task(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = tasks