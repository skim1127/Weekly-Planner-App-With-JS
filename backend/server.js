// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const cors = require("cors");

// CONFIGURATION / MIDDLEWARE
app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000 // = 24hrs
}))
app.use(cors({
    name: 'session',
    sameSite: 'strict',
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Weekly-Planner-API'
    })
})

// CONTROLLERS 
const usersController = require('./controllers/users_controller')
app.use('/users', usersController);
const checklistsController = require('./controllers/checklists_controller')
app.use('/checklists', checklistsController)
const tasksController = require('./controllers/tasks_controller')
app.use('/tasks', tasksController)
const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)
const authController = require('./controllers/authentication')
app.use('/authentication', authController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on on port: ${process.env.PORT}`)
})