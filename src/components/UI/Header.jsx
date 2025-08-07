import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
            <div className="Logo">
                    <h1 onClick={() => navigate("/")}>World Atlas</h1>

            </div>
            
            <nav>
                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/country">Countries</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>

        </div>
        
      </div>
    </header>
  )
}

export default Header;
