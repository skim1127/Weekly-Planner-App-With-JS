import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DayFour() {

    const displayDate = GetDisplayDate(4)

    return(
        <div>
            <h1>{displayDate}</h1>
        </div>
    )
}