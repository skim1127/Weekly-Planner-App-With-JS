import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DayOne() {

    const displayDate = GetDisplayDate(1)

    return(
        <div className="day-container">
            <div className="display-date-container">
                <h1>{displayDate}</h1>
            </div>
        </div>
    )
}