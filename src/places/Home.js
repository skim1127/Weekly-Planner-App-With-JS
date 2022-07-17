// import modules
import { Link } from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser"
import { useContext, useState, useEffect } from "react"
import { CalendarPlus } from 'react-bootstrap-icons'

// import components/css
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

    const { currentUser } = useContext(CurrentUser);

    const [eventData, setEventData] = useState([]);
    useEffect(() => {
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/users/${currentUser.user_id}`)
        .then(res => res.json())
        .then(data => {
            setEventData(data.events)
            // console.log(data.events)
        })
    }, [])

    return(
        <div>
            <NavigationBar/>
            <header className="homepage-header">
                <h1>{currentUser.user_name}'s Weekly Planner</h1>
            </header>
            <button className="new-event-btn">
                <Link to="/events/new">Add New Event</Link>
            </button>
            {/* Main content section for checklist & Planner */}
            <section className="main-content">
                <div className="fav-checklist">
                    <div className="fav-checklist-header">Favorited Checklist</div>
                </div>
                <DayOne data={eventData}/>
                <DayTwo data={eventData}/>
                <DayThree data={eventData}/>
                <DayFour data={eventData}/>
                <DayFive data={eventData}/>
                <DaySix data={eventData}/>
                <DaySeven data={eventData}/>
            </section>
        </div>
    )
}