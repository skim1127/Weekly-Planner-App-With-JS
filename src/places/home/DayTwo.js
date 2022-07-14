import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DayTwo() {

    const displayDate = GetDisplayDate(2)

    return(
        <div>
            <h1>{displayDate}</h1>
        </div>
    )
}