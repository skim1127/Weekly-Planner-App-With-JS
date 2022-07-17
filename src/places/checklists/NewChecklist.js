import NavigationBar from "../NavigationBar"
import ChecklistsSideBar from "./ChecklistsSideBar"
import { Link } from 'react-router-dom';
import { CurrentUser } from '../../contexts/CurrentUser';
import { useContext, useState } from 'react'

export default function NewChecklist() {
    const { currentUser } = useContext(CurrentUser)

    // State variables for checklist Data
    const [checklistName, setChecklistName] = useState(null);
    const [checklistFav, setChecklistFav] = useState(false);

    // Data Body for POST Request
    const postBody = {
        checklist_name: checklistName,
        checklist_favorited: checklistFav,
        user_id: currentUser.user_id
    }      

    // Fetch Options
    const options = {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {
            'Content-Type': 'application/json'
        }
    } 

    // POST Request
    const postData = () => {
        fetch('https://invulnerable-chocolatine-75206.herokuapp.com/checklists', options)
            .then(console.log(postBody))
            .then(res => res.json())
    }    

    // Function for checkbox
    function SetTrueFalse() {
        if (checklistFav == true) {
            setChecklistFav(false)
        } else {
            setChecklistFav(true)
        }
    }
    return(
        <div>
            <NavigationBar/>
            <div className="checklists-container">
                <ChecklistsSideBar/>
                <form className="checklist-content">
                    <div className="new-checklist-header">Create New Checklist</div>
                    <div className="new-checklist-item">
                        <label htmlFor="checklist-name">Checklist Name: </label>
                        <input 
                        type="text"
                        id="checklist-name"
                        name="checklist-name"
                        onChange={(e) => setChecklistName(e.target.value)}
                        required
                        />
                    </div>
                    {/* <div className="new-checklist-item">
                        <label htmlFor="checklist-favorited">Save as favorite checklist?</label>
                        <input
                        type="checkbox"
                        defaultValue={false}
                        onClick={SetTrueFalse}
                        id="checklist-favorited"
                        name="checklist-favorited"
                        />
                    </div> */}
                    <button onClick={postData} type="submit"><Link to="/checklists">Add It!</Link></button>
                </form>
            </div>
        </div>
    )
}