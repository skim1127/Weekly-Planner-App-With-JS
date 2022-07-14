const auth = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

auth.post('/', async (req, res) => {
    let user = await User.findOne({
        where: { user_login_id: req.body.user_login_id }
    })

    if (!user || !await bcrypt.compare(req.body.user_pw, user.user_pw)) {
        res.status(404).json({
            message: `Could not find a user with the provided User Login ID and Password.`
        })
    } else {
        req.session.user_id = user.user_id
        res.json({ user })
    }

    console.log(user)
})

auth.get('/profile', async (req, res) => {
    console.log(req.session.user_id)
    try {
        let user = await User.findOne({
            where: {
                user_id:req.session.user_id
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }
})

module.exports = auth
