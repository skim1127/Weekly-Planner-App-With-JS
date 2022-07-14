// DEPENDENCIES
const users = require('express').Router();
const db = require('../models')
const bcrypt = require('bcrypt')
const { User, Event, Checklist } = db


// FIND ALL USERS
users.get('/', async (req, res) => {
    try {
        const foundUsers = await User.findAll()
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC USER
users.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findOne({
            where: { user_id:req.params.id },
            include: [
                {
                    model: Checklist,
                    as: "checklists"
                },
                {
                    model: Event,
                    as: "events"
                }
            ]
        })
        res.status(200).json(foundUser)
    }
    catch (error) {
        res.status(500).json(error)
    }
})    

// CREATE A NEW USER
users.post('/', async (req, res) => {
    try {
        console.log(req.body)
        let password = req.body.user_pw;
        const newUser = await User.create({
            user_login_id: req.body.user_login_id,
            user_name: req.body.user_name,
            user_pw: await bcrypt.hash(password, 10)
        })
        res.status(200).json({
            message: 'Successfully inserted a new user',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
    


// UPDATE A User
users.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUser} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A USER
users.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUser} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = users