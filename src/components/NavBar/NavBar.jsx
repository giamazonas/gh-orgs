// import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div  className={styles.container}>
      <img className="ghImage"src="https://i.imgur.com/GsyVTOR.png" alt="github" height="25" ></img>
      {/* {user ?
        <nav >
          <ul className="navBarContainer">
            <li id="navBarContainer" ><Link to="/">Home</Link></li>
            <li id="navBarContainer" ><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li id="navBarContainer" ><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav >
          <ul className="navBarContainer">
            <li id="navBarContainer" ><Link to="/login">Log In</Link></li>
            <li id="navBarContainer" ><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      } */}
    </div>
  )
}

export default NavBar
