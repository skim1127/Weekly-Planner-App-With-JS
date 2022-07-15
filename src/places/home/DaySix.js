import GetDisplayDate from "../../functions/GetDisplayDate"
import GetAmPm from '../../functions/GetAmPm';

export default function DaySix(props) {
    const eventArray = []
    const displayDate = GetDisplayDate(6)
    const date = new Date()
    
    // Get date for +5 days ahead
    date.setDate(date.getDate() + 5)
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
            <h4>{item.event_name}</h4>
            <p>{`Starts: ${itemStartDateString} ${itemStartHour}`}</p>
            <p>{`Ends: ${itemEndDateString} ${itemEndHour}`}</p>
        </div>

    }) 

    return(
        <div className="day-container">
            <div className="display-date-container">
                <h1>{displayDate}</h1>
            </div>
            {eventItems}
        </div>
    )
}