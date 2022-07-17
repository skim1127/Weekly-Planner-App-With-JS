import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavigationBar from '../NavigationBar';
import ChecklistsSideBar from './ChecklistsSideBar';
import { PencilSquare } from 'react-bootstrap-icons'

export default function() {
    const { id } = useParams();

    // State variable for Task Data & Checklist data
    const [tasksData, setTasksData] = useState([]);
    const [checklistData, setChecklistData] = useState([]);
    const checklistTasks = []

    // Get specified Checklist Data
    useEffect(() => {
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/tasks`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTasksData(data)
            })
        
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/checklists/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChecklistData(data)
            })
    }, [id]);

    // Go though all tasks and push task data to array if checklist_id matches the param
    for (let i=0; i < tasksData.length; i++) {
        if (tasksData[i].checklist_id == id) {
            checklistTasks.push(tasksData[i])
        }
    }
    // console.log(checklistTasks)

    // POST Request for new task
    const [taskName, setTaskName] = useState(null);
    // POST request Body
    const postBody = {
        task_name: taskName,
        task_checked: false,
        checklist_id: id
    }
    // Options
    const options = {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // Request
    const postData = () => {
        fetch('https://invulnerable-chocolatine-75206.herokuapp.com/tasks', options)
            .then(console.log(postBody))
            .then(res => res.json())
    }

    // Map through array to return div elements for each task
    const tasksList = checklistTasks.map((item, index) => {  

        // IF task_checked is true, return a checked checkbox.
        if (item.task_checked == true) {
            return<form className="task-item" key={index}>
                <input className="task-checkbox" type="checkbox" checked/>
                <input className="task-name" type="text" defaultValue={item.task_name}/>
                <button className="edit-btn"><Link to={`/tasks/${item.task_id}`}><PencilSquare/></Link></button>
            </form>
        } else {
            return<form className="task-item" key={index}>
                <input className="task-checkbox" type="checkbox"/>
                <input className="task-name" type="text" defaultValue={item.task_name}/>
                <button className="edit-btn"><Link to={`/tasks/${item.task_id}`}><PencilSquare/></Link></button>
            </form>
        }
    })
    return(
        <div>
            <NavigationBar/>
            <div className="checklists-container">
                <ChecklistsSideBar/>
                <section className="checklist-content">
                    <div className="checklist-title">
                        <div className="checklist-name">{checklistData.checklist_name}</div>
                        <button><Link to={`/checklists/edit/${id}`}>Edit Checklist <PencilSquare/></Link></button>
                    </div>
                    <form onSubmit={postData} className="add-new-task">
                        <input 
                        type="text"
                        onChange={(e) => setTaskName(e.target.value)} 
                        placeholder="Add a new Task"/>
                        <button type="submit">+</button>
                    </form>
                    <div>
                        {tasksList}
                    </div>
                </section>
            </div>
        </div>
    )
}