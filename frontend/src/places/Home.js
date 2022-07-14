import NavigationBar from "./NavigationBar"
import "../css/Home.css"

export default function Home() {
    return(
        <div>
            <NavigationBar/>
            <header>
                <h1>Weekly Planner</h1>
            </header>
            <section className="main-content">
                <div><h1>1</h1></div>
                <div><h1>2</h1></div>
                <div><h1>3</h1></div>
                <div><h1>4</h1></div>
                <div><h1>5</h1></div>
                <div><h1>6</h1></div>
                <div><h1>7</h1></div>
                <div><h1>8</h1></div>
            </section>
        </div>
    )
}