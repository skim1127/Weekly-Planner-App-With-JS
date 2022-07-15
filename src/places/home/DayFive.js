import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DayFive() {

    const displayDate = GetDisplayDate(5)

    return(
        <div className="day-container">
            <div className="display-date-container">
                <h1>{displayDate}</h1>
            </div>
        </div>
    )
}