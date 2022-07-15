import { useContext, useState } from 'react'
import { CurrentUser } from '../contexts/CurrentUser'
import NavigationBar from './NavigationBar';

export default function NewEvent() {

    const { currentUser } = useContext(CurrentUser)
    // State variables for New Event Form
    const [eventStartDate, setEventStartDate] = useState(null);
    const [eventEndDate, setEventEndDate] = useState(null);
    const [eventName, setEventName] = useState(null);

    // Data Body for POST Request
    const postBody = {
        event_name: eventName,
        event_start_date: eventStartDate,
        event_end_date: eventEndDate,
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
        fetch('https://invulnerable-chocolatine-75206.herokuapp.com/events', options)
            .then(console.log(postBody))
            .then(res => res.json())
    }
    return(
        <div>
            <NavigationBar/>
            <h3>Create New Event</h3>
            <form id="new-event-form">
                <ul>
                    <li>
                        <label htmlFor="event-name">Title: </label>
                        <input
                        type="text"
                        id="event-name"
                        name="event-name"
                        required
                        onChange={(e) => setEventName(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="event-start-date">Start Date: </label>
                        <input
                        type="datetime-local"
                        id="event-start-date"
                        name="event-start-date"
                        required
                        onChange={(e) => setEventStartDate(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="event-end-date">End Date: </label>
                        <input
                        type="datetime-local"
                        id="event-end-date"
                        name="event-end-date"
                        required
                        onChange={(e) => setEventEndDate(e.target.value)}/>
                    </li>
                </ul>
                <button onClick={postData} type="submit">Add It!</button>
            </form>
        </div>
    )
}