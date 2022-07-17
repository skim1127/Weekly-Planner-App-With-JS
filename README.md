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
2. Back End - Javascript, Express, Sequelize, PostgreSQL
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

## Application Logic
### [Back End Logic]
- The application API is deployed on Heroku, connected to a Postgres Database using Heroku Postgres.
- I used Sequelize-CLI to create Models & Migrations that define table columns & relationships.
- I made use of useContext to keep tracke of the user that's logged in, so that I can use the user_id to query for user specific data to render on the frontend.
- My main use of the controllers were to interact with the database for basic CRUD operations.
- The authentication controller handles the back-end logic for verifying User Login ID & Password, as well as checking if there is a user that is already logged in (session management) with cookies.
### [Front End Logic]
- Landing Page(Login Page) "/"
```
It made the most sense to make the landing page the login page, 
as the Weekly Planner App needs to display everything based on the user that's logged in.
Once users input data into the login form, it sends a request to the backend and checks 
if the user login id exists, and also checks if the hashed password matches the one inside 
the database. If credentials are correct, users are sent to their homepage.
```
- Sign up Page "/sign-up"
```
Users can click on the sign up button in the landing page to come to the sign-up page. 
Once users input data into the sign up form, it sends a POST request to the backend and 
creates a new user. The user is then sent back to the login page.
```
- User Home Page "/home"
```
On load, the homepage uses a useEffect hook & a fetch request to grab event data related 
to the logged in user using useContext. That data is then passed into its child components,
which checks the database for any events that have the same date as itself, then displays the
event(s) if the date matches.
```
- Add New Event Page "/events/new"
```
Users can click on the "Add New Event" button on the homepage to come to the new event page.
Once users input data into the event form, it sends a POST request to the backend and creates
a new event. If the event start date matches any of the dates in the homepage, it will display 
accordingly.
```
- Edit Event Page "/events/edit/:id"
```
Users can click on the edit button on an existing event to come to the edit event page.
Once users input data into the form, it sends a PUT request to the backend and updates the
specified event. If the user clicks the delete button, it sends a DELETE request to the backend
and the event is deleted.
```
- Checklists Page "/checklists"
```
Users can come here by clicking on "My Checklists" link on the Navigation Bar. It prompts the user
to click on any existing checklists or create a new checklist using the button.
```
- Add New Checklist Page "/checklists/new"
```
Users can come here by clicking on "+ New Checklist" button on the side bar of the checklists page.
Once users input data into the form, it sends a POST request to the backend and creates a new checklist.
```
- Checklist Details Page "checklists/:id"
```
Users can come here by clicking on any existing checklist on the side bar of the checklists page.
On load, it sends a GET request to the backend to grab checklist data based on the logged in user
and grabs all the tasks based on the checklist_id. It then displays any tasks that the checklist has.
Users can also add a new task by typing it in the input and submitting it by pressing enter or clicking
the "+" button.
```
- Edit Checklist Page "/checklists/edit/:id"
```
Users can come here by clicking on "Edit Checklist" button on any checklist details page.
Once users input data into the form, it sends a PUT request to the backend and updates the checklist.
If users click on the delete button, it sends a DELETE request and the checklist is deleted.
```
- Edit Task Page "/tasks/:id"
```
Users can come here by clicking on the edit button on any existing task.
Once users input data into the form, it sends a PUT request to the backend and updates the task.
If users click on the delete button, it sends a DELETE request and the task is deleted.
```
- Navigation Bar
```
The navigation bar displays available links that users can click on. Utilizes the <Link> component
from react-router-dom. "Home" takes the user back to their homepage, "30-day Calendar" takes the 
user to a calendar page, and "My Checklists" takes the user to their checklists page. It also shows 
the logged in user's display name using useContext.
```
- Checklists Side Bar
```
The Checklists Side bar is only displayed when the user is on any checklist-related page.
It contains a button that takes the user to a form to create a new checklist, and contains any
existing checklists related to the logged in user. On load, it sends a GET request based on the
logged in user and grabs all the related checklist data. For every checklist the user has, it renders
a <Link> component that takes the user to the specific checklist details page.
```
 
## POST-MVP Plans
- Nested checklists(checklist within a checklist)
- Automatically add events/tasks when user specifies it is a weekly/daily occurence
- Show today's weather on the homepage when logged in.
- Desktop notifications/reminders

## Heroku Links
- Link to Backend
- https://invulnerable-chocolatine-75206.herokuapp.com/
- Link to Frontend (Not functional atm)
- https://abracadabrant-baguette-63042.herokuapp.com/
