import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DayTwo() {

    const displayDate = GetDisplayDate(2)

    return(
        <div className="day-container">
            <div className="display-date-container">
                <h1>{displayDate}</h1>
            </div>
        </div>
    )
}