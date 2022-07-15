import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DaySeven() {

    const displayDate = GetDisplayDate(7)

    return(
        <div className="day-container">
            <div className="display-date-container">
                <h1>{displayDate}</h1>
            </div>
        </div>
    )
}