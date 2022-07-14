import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DayThree() {

    const displayDate = GetDisplayDate(3)

    return(
        <div>
            <h1>{displayDate}</h1>
        </div>
    )
}