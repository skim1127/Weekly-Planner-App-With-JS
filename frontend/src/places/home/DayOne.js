import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DayOne() {

    const displayDate = GetDisplayDate(1)

    return(
        <div>
            <h1>{displayDate}</h1>
        </div>
    )
}