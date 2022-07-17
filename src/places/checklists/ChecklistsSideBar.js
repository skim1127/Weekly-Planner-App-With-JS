import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CurrentUser } from "../../contexts/CurrentUser"

export default function ChecklistsSideBar() {

    // 1. Fetch to get all checklists data based on logged in user
    // 2. use .map() to return HTML elements with links to /checklists/:id

    const { currentUser } = useContext(CurrentUser);
    // State variable to store all checklists data
    const [checklistsData, setChecklistsData] = useState([]);

    // Get ALL Checklists based on user id
    useEffect(() => {
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/users/${currentUser.user_id}`)
        .then(res => res.json())
        .then(data => {
            setChecklistsData(data.checklists)
            // console.log(data.checklists)
        })
    }, [])

    // array to store links to specific checklists
    const checklistList = checklistsData.map((item, index) => {
        return<div key={index} className="checklist-link">
            <Link to={`/checklists/${item.checklist_id}`}>{item.checklist_name}</Link>
            </div>
    })

    return(
        <aside className="checklists-side-bar">
            <div className="side-bar-header">
                My Checklists
            </div>
            <div>
                <button><Link to="/checklists/new">+ New Checklist</Link></button>
            </div>
            {checklistList}
            <div className="checklist-link"></div>
        </aside>
    )
}
