import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import "../css/Login.css"

function SignUpForm() {

	const navigate = useNavigate()

	const [user, setUser] = useState({
		user_login_id: '',
		user_pw: '',
		user_name: '',
	})

	async function handleSubmit(e) {
		e.preventDefault()
        console.log(user)
		await fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		navigate(`/`)
	}

	return (
		<main>
			<div className="sign-up-header">Sign Up</div>
			<form>
				<div className="sign-up-input row">
					<div className="col-sm-6 form-group">
						<label htmlFor="userName">Display Name: </label>
						<input
							required
							value={user.user_name}
							onChange={e => setUser({ ...user, user_name: e.target.value })}
							className="form-control"
							id="userName"
							name="userName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="sign-up-input col-sm-6 form-group">
						<label htmlFor="loginId">Login ID: </label>
						<input
							required
							value={user.user_login_id}
							onChange={e => setUser({ ...user, user_login_id: e.target.value })}
							className="form-control"
							id="loginId"
							name="loginId"
						/>
					</div>
                    <div className="sign-up-input col-sm-6 form-group">
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            required
                            value={user.user_pw}
                            onChange={e => setUser({ ...user, user_pw: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
				</div>
				<input onClick={handleSubmit} className="sign-up-btn btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main>
	)
}

export default SignUpForm