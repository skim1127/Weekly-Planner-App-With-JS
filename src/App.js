import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// COMPONENTS
import Home from './places/Home'
import SignUpForm from './users/SignUpForm';
import LoginForm from './users/LoginForm';
import CurrentUserProvider from './contexts/CurrentUser'
import Calendar from './places/Calendar';
import NewEvent from './places/NewEvent';

function App() {
  return (
    <CurrentUserProvider>
    <div className="App">
      <Router>
        <div className="display">
          <Routes>
            <Route path="/home" element={ <Home/> }/>
            <Route path="/sign-up" element={ <SignUpForm/> }/>
            <Route path="/" element={ <LoginForm/> }/>
            <Route path="/calendar" element={ <Calendar/> }/>
            <Route path="/events/new" element={ <NewEvent/> }/>
          </Routes>
        </div>
      </Router>
    </div>
    </CurrentUserProvider>
  );
}

export default App;