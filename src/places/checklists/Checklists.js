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
                        Checklist 1
                        <button className="edit-checklist-btn">
                            Edit Checklist
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <input type="checkbox"/>
                                Task 1
                            </li>
                            <li>
                                <input type="checkbox"/>
                                Task 2
                            </li>
                            <li>
                                <input type="checkbox"/>
                                Task 3
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}