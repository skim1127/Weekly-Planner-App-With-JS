import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DayFive() {

    const displayDate = GetDisplayDate(5)

    return(
        <div>
            <h1>{displayDate}</h1>
        </div>
    )
}