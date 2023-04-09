import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h1>Apple信者@RAM不足</h1>
        </div>
        <nav>
            <ul>
                <li><Link to="/">ホーム</Link></li>
                
                <li><Link to="/blog">Blog</Link></li>
                <li>
                    <a href="https://twitter.com/M9zRs0VDM9RTU7B">SNS</a>
                </li>
            </ul>
        </nav>
    </header>

  )
}

export default Header