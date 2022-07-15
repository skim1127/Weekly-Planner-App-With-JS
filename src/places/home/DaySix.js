import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DaySix() {

    const displayDate = GetDisplayDate(6)

    return(
        <div className="day-container">
            <div className="display-date-container">
                <h1>{displayDate}</h1>
            </div>
        </div>
    )
}