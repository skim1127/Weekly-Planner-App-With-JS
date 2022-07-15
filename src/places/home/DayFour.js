import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DayFour() {

    const displayDate = GetDisplayDate(4)

    return(
        <div className="day-container">
            <div className="display-date-container">
                <h1>{displayDate}</h1>
            </div>
        </div>
    )
}