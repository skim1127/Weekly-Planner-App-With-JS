import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import NavigationBar from './NavigationBar';
import { Trash } from 'react-bootstrap-icons'
import "../css/EditEvent.css"

export default function EditEvent() {
    const { id } = useParams();

    // State variable for Event Data
    const [eventData, setEventData] = useState([]);

    // State variables for Edit Event Form
    const [eventStartDate, setEventStartDate] = useState(null);
    const [eventEndDate, setEventEndDate] = useState(null);
    const [eventName, setEventName] = useState(null);

    // Get the specified Event Data
    useEffect(() => {
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/events/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setEventData(data)
            })
    }, []);
    
    // Data BODY for PUT request
    const putBody = {
        event_name: eventName,
        event_start_date: eventStartDate,
        event_end_date: eventEndDate,
        user_id: eventData.user_id
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
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/events/${id}`, options)
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
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/events/${id}`, deleteOptions)
            .then(res => res.json())        
    }

    return(
        <div>
            <NavigationBar/>
            <div className="edit-event-header">Edit Event</div>        
            <form id="edit-event-form">
                <ul>
                    <li>
                        <label htmlFor="event-name">Title: </label>
                        <input
                        type="text"
                        id="event-name"
                        name="event-name"
                        placeholder={eventData.event_name}
                        required
                        onChange={(e) => setEventName(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="event-start-date">Start Date: </label>
                        <input
                        type="datetime-local"
                        id="event-start-date"
                        name="event-start-date"
                        placeholder={eventData.event_start_date}
                        required
                        onChange={(e) => setEventStartDate(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="event-end-date">End Date: </label>
                        <input
                        type="datetime-local"
                        id="event-end-date"
                        name="event-end-date"
                        placeholder={eventData.event_end_date}
                        required
                        onChange={(e) => setEventEndDate(e.target.value)}/>
                    </li>
                </ul>
                <button onClick={putData} type="submit">
                    <Link to="/home">Edit It!</Link>
                </button>
                <button onClick={deleteData}>
                    <Link to="/home"><Trash/> Delete It!</Link>
                </button>
            </form>
        </div>
    )
}