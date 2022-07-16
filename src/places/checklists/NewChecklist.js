import NavigationBar from "../NavigationBar"
import ChecklistsSideBar from "./ChecklistsSideBar"

export default function NewChecklist() {
    return(
        <div>
            <NavigationBar/>
            <div className="checklists-container">
                <ChecklistsSideBar/>
                <form className="checklist-content">
                    <header>Create New Checklist</header>
                    <div>
                        <label htmlFor="checklist-name">Checklist Name: </label>
                        <input 
                        type="text"
                        id="checklist-name"
                        name="checklist-name"
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="checklist-favorited">Save as favorite checklist?</label>
                        <input
                        type="checkbox"
                        id="checklist-favorited"
                        name="checklist-favorited"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}