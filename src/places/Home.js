import { Link } from "react-router-dom"

import NavigationBar from "./NavigationBar"
import DayOne from "./home/DayOne"
import DayTwo from "./home/DayTwo"
import DayThree from "./home/DayThree"
import DayFour from "./home/DayFour"
import DayFive from "./home/DayFive"
import DaySix from "./home/DaySix"
import DaySeven from "./home/DaySeven"
import "../css/Home.css"

export default function Home() {
    return(
        <div>
            <NavigationBar/>
            <header>
                <h1>Weekly Planner</h1>
            </header>
            <button className="new-event-btn">
                <Link to="/events/new">Add New Event</Link>
            </button>
            {/* Main content section for checklist & Planner */}
            <section className="main-content">
                <div className="fav-checklist">
                    <h1>Favorited Checklist</h1>
                </div>
                <DayOne/>
                <DayTwo/>
                <DayThree/>
                <DayFour/>
                <DayFive/>
                <DaySix/>
                <DaySeven/>
            </section>
        </div>
    )
}