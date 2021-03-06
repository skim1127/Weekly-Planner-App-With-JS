import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom'
import { CurrentUser } from "../contexts/CurrentUser"
import "../css/Login.css"

function LoginForm() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        user_login_id: '',
        user_pw: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/authentication/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            navigate(`/home`)
        } else {
            setErrorMessage(data.message)
        }
    
    }

    return (
        <main>
            <div className="main-header">Weekly-Planner Application</div>
            <div className="login-header">Login</div>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="login-input col-sm-6 form-group">
                        <label htmlFor="user_login_id">Login ID: </label>
                        <input
                            required
                            value={credentials.user_login_id}
                            onChange={e => setCredentials({ ...credentials, user_login_id: e.target.value })}
                            className="form-control"
                            id="user_login_id"
                            name="user_login_id"
                        />
                    </div>
                    <div className="login-input col-sm-6 form-group">
                        <label htmlFor="user_pw">Password: </label>
                        <input
                            type="password"
                            required
                            value={credentials.user_pw}
                            onChange={e => setCredentials({ ...credentials, user_pw: e.target.value })}
                            className="form-control"
                            id="user_pw"
                            name="user_pw"
                        />
                    </div>
                </div>
                <input className="login-btn btn btn-primary" type="submit" value="Login" />
                <button className="sign-up-btn"><Link to="/sign-up">Sign-Up</Link></button>
            </form>
        </main>
    )
}

export default LoginForm