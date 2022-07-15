import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DayThree() {

    const displayDate = GetDisplayDate(3)

    return(
        <div className="day-container">
            <div className="display-date-container">
                <h1>{displayDate}</h1>
            </div>
        </div>
    )
}