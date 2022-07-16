import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavigationBar from '../NavigationBar';
import ChecklistsSideBar from './ChecklistsSideBar';
import { Trash } from 'react-bootstrap-icons'

export default function TaskDetails() {
    const { id } = useParams();

    // State variables for task data
    const [taskData, setTaskData] = useState([]);
    const [taskName, setTaskName] = useState(null);
    const [taskChecked, setTaskChecked] = useState(false);

    // Get specified Task Data
    useEffect(() => {
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/tasks/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTaskData(data)
                setTaskName(data.task_name)
                setTaskChecked(data.task_checked)
            })
    }, [])

    // Data BODY for PUT request
    const putBody = {
        task_name: taskName,
        task_checked: taskChecked,
        checklist_id: taskData.checklist_id
    }

    // PUT Options
    const options = {
        method: 'PUT',
        body: JSON.stringify(putBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // PUT Request function
    const putData = () => {
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/tasks/${id}`, options)
            .then(console.log(putBody))
            .then(res => res.json())
    }    

    // Options for delete request
    const deleteOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const deleteData = () => {
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/tasks/${id}`, deleteOptions)
            .then(res => res.json())        
    }    
    
    // Function for checkbox
    function SetTrueFalse() {
        if (taskChecked == true) {
            setTaskChecked(false)
        } else {
            setTaskChecked(true)
        }
    }
    return(
        <div>
            <NavigationBar/>
            <div className="task-form-container">
                <ChecklistsSideBar/>
                <form className="edit-task-form">
                    <header>Editing Task: {taskData.task_name}</header>
                    <input 
                    type="checkbox"
                    onClick={SetTrueFalse}
                    defaultValue={taskChecked}
                    />
                    <input
                    type="text"
                    onChange={(e) => setTaskName(e.target.value)}
                    defaultValue={taskName}
                    />
                    <button onClick={putData} type="submit"><Link to={`/checklists/${taskData.checklist_id}`}>Submit</Link></button>
                    <button onClick={deleteData}><Link to={`/checklists/${taskData.checklist_id}`}><Trash/></Link></button>
                </form>
            </div>
        </div>
    )
}