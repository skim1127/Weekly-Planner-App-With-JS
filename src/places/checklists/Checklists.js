import NavigationBar from "../NavigationBar"
import ChecklistsSideBar from "./ChecklistsSideBar"
import "../../css/Checklists.css"

export default function Checklists() {
    return(
        <div>
            <NavigationBar/>
            <div className="checklists-container">
                <ChecklistsSideBar/>
                <section className="checklist-content">
                    <div>
                        <h2>Click on an Existing Checklist,</h2>
                        <h2>or Create a New Checklist.</h2>
                    </div>
                </section>
            </div>
        </div>
    )
}