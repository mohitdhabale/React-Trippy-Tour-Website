import { Link, Outlet } from "react-router-dom"
import "./navigation.css"

function Nav() {
    return (
        <>
            <div id="nav-main">
                <h1 id="nav-logo">Trippy</h1>

                <ul id="nav-ul">
                    <li id="nav-pg-name"><Link to='/'>Home</Link></li>
                    <li id="nav-pg-name"><Link to='/about'>About</Link></li>
                    <li id="nav-pg-name"><Link to='/service'>Service</Link></li>
                    <li id="nav-pg-name"><Link to='/contact'>Contact</Link></li>
                    <Outlet />
                </ul>

                <button id="nav-btn">Sign Up</button>
            </div>
        </>
    )
}

export default Nav