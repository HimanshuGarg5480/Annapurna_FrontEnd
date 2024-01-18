import React from 'react'
import { Link } from 'react-router-dom'
import { RiSearchLine } from 'react-icons/ri';
import { MessageBox } from 'react-chat-elements'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/NGOs">NGOs</Link>
                </li>
                <li>
                    <Link to="/MyDonations">MyDonations</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </nav>
        <nav>
            <Link to="/Search"><RiSearchLine className="search-icon" /></Link>
        </nav>
        <nav>
            <Link to="/Chat">
              Chat
            </Link>
        </nav>
    </header>
  )
}

export default Header;