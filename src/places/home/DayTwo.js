import GetDisplayDate from "../../functions/GetDisplayDate"
import GetAmPm from '../../functions/GetAmPm';
import {PencilSquare} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function DayTwo(props) {
    const eventArray = []
    const displayDate = GetDisplayDate(2)
    const date = new Date()

    // Get Date for Tomorrow
    date.setDate(date.getDate() + 1)
    const dateString = date.toDateString()
    // console.log(dateString)
    
    for (let i = 0; i < props.data.length; i++) {
        let eventDate = new Date(props.data[i].event_start_date)
        let eventDateString = eventDate.toDateString()
        // console.log(eventDateString)
        // IF event date string matches today's date string, append to array
        if (eventDateString == dateString) {
            eventArray.push(props.data[i])
        }
    }
    // console.log(eventArray)
    
    // For Each Event inside event Array, arrange data in a nice, readable format.
    const eventItems = eventArray.map((item, index) => {

        let itemStartDate = new Date(item.event_start_date)
        let itemStartDateString = itemStartDate.toDateString()
        // console.log(itemStartDate.getHours())
        let itemStartHour = GetAmPm(itemStartDate.getHours())
        let itemEndDate = new Date(item.event_end_date)
        let itemEndDateString = itemEndDate.toDateString()
        // console.log(itemEndDate.getHours())
        let itemEndHour = GetAmPm(itemEndDate.getHours())

        return<div key={index} className="event-item">
            <div className="event-item-title">
                {item.event_name}
                <button><Link to={`/events/edit/${item.event_id}`}><PencilSquare/></Link></button>
            </div>
            <p>{`Starts: ${itemStartDateString}, ${itemStartHour}`}</p>
            <p>{`Ends: ${itemEndDateString}, ${itemEndHour}`}</p>
        </div>

    })    

    return(
        <div className="day-container">
            <div className="display-date-container">
                {displayDate}
            </div>
            {eventItems}
        </div>
    )
}