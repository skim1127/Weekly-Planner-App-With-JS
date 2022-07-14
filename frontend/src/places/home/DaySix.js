import GetDisplayDate from "../../functions/GetDisplayDate"

export default function DaySix() {

    const displayDate = GetDisplayDate(6)

    return(
        <div>
            <h1>{displayDate}</h1>
        </div>
    )
}