// DEPENDENCIES
const checklists = require('express').Router();
const db = require('../models')
const { User, Checklist, Task } = db


// FIND ALL CHECKLISTS
checklists.get('/', async (req, res) => {
    try {
        const foundChecklists = await Checklist.findAll({
            include: [
                {
                    model: User,
                    as: "users"
                }
            ]
        })
        res.status(200).json(foundChecklists)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC CHECKLIST
checklists.get('/:id', async (req, res) => {
    try {
        const foundChecklist = await Checklist.findOne({
            where: { checklist_id:req.params.id },
            include: [
                {
                    model: Task,
                    as: "tasks"
                }
            ]
        })
        res.status(200).json(foundChecklist)
    }
    catch (error) {
        res.status(500).json(error)
    }
})    

// CREATE A NEW CHECKLIST
checklists.post('/', async (req, res) => {
    try {
        const newChecklist = await Checklist.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new checklist',
            data: newChecklist
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
    


// UPDATE A CHECKLIST
checklists.put('/:id', async (req, res) => {
    try {
        const updatedChecklist = await Checklist.update(req.body, {
            where: {
                checklist_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedChecklist} checklist(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A CHECKLIST
checklists.delete('/:id', async (req, res) => {
    try {
        const deletedChecklist = await Checklist.destroy({
            where: {
                checklist_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedChecklist} checklist(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = checklists