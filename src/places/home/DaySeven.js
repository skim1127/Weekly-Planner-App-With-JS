import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DaySeven() {

    const displayDate = GetDisplayDate(7)

    return(
        <div>
            <h1>{displayDate}</h1>
        </div>
    )
}