# Weekly-Planner-App
A 7-day planner with checklist functionalities

## Inspiration for the application
- I wanted to create a planner application that also has a checklist functionality. The main purpose of the application is to keep track of any tasks or events that will happen in the next 7 days. However, I also wanted to implement a checklist within the application so that users can easily add tasks that need to be done that aren't necessarily bound to a date.
(Example: checklist of items that one needs for a camping trip.)

## How to use the application
1. Users will be prompted to login on an existing account, or create a new account. Once logged in, they are directed to the homepage.
2. Once at the homepage, Users will be able to see a 7-day calendar, along with a checklist. They can add time-specific events or checklist tasks.
3. Using the Navbar, Users can also navigate to their checklists page, or 30-day calendar page.
4. The checklists page can contain as many checklists as the users want.

## Technologies used to build the application
1. Front End - React
2. Back End - Javascript, Sequelize, PostgreSQL
3. Styling - CSS

## Development Process
1. I started out thinking about how I wanted the login page and homepage to look like, and made some simple layouts with paint.

##### Login Page

- ![alt tag](https://i.gyazo.com/29e0434e5f2a9e43a230fa65d633227f.png)
##### Homepage
- ![alt tag](https://i.gyazo.com/f64cd58a2aa4c26731cc6fdaf5fdcd2a.png)

2. I then started thinking about possible database relationships between the Users, checklists, and events. I decided to differentiate between checklist tasks, and calendar events, and made it so that only calendar events will have some time element to it(start date & time, end date & time). Checklist tasks on the other hand, will have check boxes to indicate whether the task was completed or not.

##### Database Relationship First Draft
- ![alt tag](https://i.gyazo.com/6d85fe5aa2b1a49255bb1fecc0ca42a6.png)

3. After defining database relationships, I started configuring back end controllers and models. Initially, I wanted to implement a backend using Flask and python, but User authentication turned out to be too time consuming to try to figure out. Therefore, I transitioned into using something that I was more familiar with, which was using Sequelize, PostgreSQL and Javascript.

4. After having completely setup my backend, I started working on the front-end functionality.

## Outstanding Bugs & Unfinished Functionality
- Session management not implemented
- Checklist task doesn't update properly
- New Checklist is not added dynamically
- Favorited Checklist not working
- Front-end not working in Heroku deployment.

## POST-MVP Plans
- Nested checklists(checklist within a checklist)
- Automatically add events/tasks when user specifies it is a weekly/daily occurence
- Show today's weather on the homepage when logged in.
- Desktop notifications/reminders

## Heroku Links
- Link to Backend
- https://invulnerable-chocolatine-75206.herokuapp.com/
- Link to Frontend
- https://abracadabrant-baguette-63042.herokuapp.com/
