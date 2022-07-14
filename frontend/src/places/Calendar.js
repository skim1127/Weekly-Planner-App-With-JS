import "../css/Calendar.css"
import "../css/Fonts.css"
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons'

export default function Calendar() {

    // const renderCalendar = () => {
    //     date.setDate(1);
    //     // console.log(date.getDay());
    
    //     const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
        
    //     const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    //     // console.log(prevLastDay)
    
    //     const firstDayIndex = date.getDay()
    
    //     const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
    //     const lastDays = 7 - lastDayIndex - 1
    //     // console.log(lastDays)
    
    //     const months = [
    //         "January",
    //         "February",
    //         "March",
    //         "April",
    //         "May",
    //         "June",
    //         "July",
    //         "August",
    //         "September",
    //         "October",
    //         "November",
    //         "December"
    //     ];
    
    //     const thisMonth = months[date.getMonth()];
    //     const thisDate = new Date().toDateString();
    
    //     let days = Array.from({length: lastDay}, (_, i) => i + 1)
    //     // console.log(days)
    //     let daysList = days.map((item, index) => {
    //         if (item === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    //             return<div  className="today" key={index}>{item}</div>
    //         } else {
    //             return<div key={index}>{item}</div>
    //         }
    //     })
    
    //     let prevDays = Array.from({length: firstDayIndex}, (_,i) => i + 1).reverse()
    //     // console.log(prevDays)
    //     let prevDaysList = prevDays.map((item, index) => {
    //         return<div className="prev-date" key={index}>{prevLastDay - item + 1}</div>
    //     })
    
    
    //     let nextDays = Array.from({length: lastDays}, (_,i) => i + 1)
    //     // console.log(nextDays)
    //     let nextDaysList = nextDays.map((item, index) => {
    //         return<div className="next-date" key={index}>{item}</div>
    //     })
    // }
    const date = new Date();

    date.setDate(1);
    // console.log(date.getDay());

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    // console.log(prevLastDay)

    const firstDayIndex = date.getDay()

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const lastDays = 7 - lastDayIndex - 1
    console.log(lastDays)

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const thisMonth = months[date.getMonth()];
    const thisDate = new Date().toDateString();

    let days = Array.from({length: lastDay}, (_, i) => i + 1)
    // console.log(days)
    let daysList = days.map((item, index) => {
        if (item === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            return<div  className="today" key={index}>{item}</div>
        } else {
            return<div key={index}>{item}</div>
        }
    })

    let prevDays = Array.from({length: firstDayIndex}, (_,i) => i + 1).reverse()
    // console.log(prevDays)
    let prevDaysList = prevDays.map((item, index) => {
        return<div className="prev-date" key={index}>{prevLastDay - item + 1}</div>
    })


    let nextDays = Array.from({length: lastDays}, (_,i) => i + 1)
    // console.log(nextDays)
    let nextDaysList = nextDays.map((item, index) => {
        return<div className="next-date" key={index}>{item}</div>
    })

    const prevMonth = () => {
        date.setMonth(date.getMonth() - 1);
        // renderCalendar()
    }

    const nextMonth = () => {
        date.setMonth(date.getMonth() + 1);
        // renderCalendar()
    }

    return (
        <div>
            <div className="container">
                <div className="calendar">
                    <div className="month">
                        <ChevronLeft onClick={prevMonth} className="pointer prev"/>
                        <div className="date">
                            <h1>{thisMonth}</h1>
                            <p>{thisDate}</p>
                        </div>
                        <ChevronRight onClick={nextMonth} className="pointer next"/>
                    </div>
                    <div className="weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div className="days">
                        {prevDaysList}
                        {daysList}
                        {nextDaysList}
                    </div>
                </div>
            </div>
        </div>
    )
}