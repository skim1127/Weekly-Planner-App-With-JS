import NavigationBar from "../NavigationBar"
import ChecklistsSideBar from "./ChecklistsSideBar"
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Trash } from 'react-bootstrap-icons'

export default function() {
    const { id } = useParams();

    // State variables for checklist data
    const [checklistData, setChecklistData] = useState([]);
    const [checklistName, setChecklistName] = useState(null);
    const [checklistFav, setChecklistFav] = useState(null);

    // Get specified Checklist Data
    useEffect(() => {
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/checklists/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChecklistData(data)
                setChecklistName(data.checklist_name)
                setChecklistFav(data.checklist_favorited)
            })
    }, [])

    // Data BODY for PUT request
    const putBody = {
        checklist_name: checklistName,
        checklist_favorited: checklistFav,
        user_id: checklistData.user_id
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
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/checklists/${id}`, options)
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
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/checklists/${id}`, deleteOptions)
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
                    <header>Edit Checklist</header>
                    <div>
                        <label htmlFor="checklist-name">Checklist Name: </label>
                        <input
                        type="text"
                        onChange={(e) => setChecklistName(e.target.value)}
                        placeholder={checklistName}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="checklist-favorited">Save as favorite checklist?</label>
                        <input
                        type="checkbox"
                        defaultValue={false}
                        onClick={SetTrueFalse}
                        id="checklist-favorited"
                        name="checklist-favorited"
                        />   
                    </div>     
                    <button onClick={putData}><Link to="/checklists">Edit it!</Link></button>
                    <button onClick={deleteData}><Link to="/checklists"><Trash/></Link></button>            
                </form>
            </div>
        </div>
    )
}