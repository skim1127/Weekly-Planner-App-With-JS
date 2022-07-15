import { useContext } from "react";
import { Link } from 'react-router-dom'
import { CurrentUser } from '../contexts/CurrentUser'
import '../css/NavigationBar.css'

// Render a navigation bar
export default function NavigationBar() {

  const { currentUser } = useContext(CurrentUser)

  let loginActions = (
    <div>
      <li>
        <Link to="/sign-up">Sign Up</Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
    </div>
  )

  if (currentUser) {
    loginActions = (
      <li className="login-status">
        Logged in as { currentUser.user_name }
      </li>
    )
  }
  return (
    <nav>
      <ul className="nav-container">
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/profile">My Profile</Link>
        </li>
        <li>
            <Link to="/calendar">30-Day Calendar</Link>
        </li>
        <li>
            <Link to="/checklists">My Checklists</Link>
        </li>
        {loginActions}
      </ul>
    </nav>
  );
}