import { useNavigate } from "react-router-dom";
import './header.css';
import download from '../../assets/images/download.webp';
import { NavLink } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={download} className="log" alt='logo' onClick={() => navigate("/")} ></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navi navbar-nav ">
            <li><NavLink to="/" className=
              "header-link" >HOME</NavLink></li>
            <li><NavLink to="/about" className=
              "header-link">ABOUT</NavLink></li>
            <li><NavLink to="/productlist" className=
              "header-link">SHOP</NavLink></li>
            <li><NavLink to="/contact" className=
              "header-link">CONTACT</NavLink></li>
          </ul>
          <i className="fa fa-search" onClick={() => navigate('/productlist')} aria-hidden="true"></i>
          <input type="button" className="quote" value="GET A QUOTE" onClick={() => navigate('/contact')} />
          {localStorage.getItem('jwt') ?
            <i className="fa fa-sign-out" onClick={onLogout} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Logout" aria-hidden="true"></i>
            : <i className="fa fa-sign-in" onClick={() => navigate('/login')} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Login" aria-hidden="true"></i>}
        </div>
      </nav>
    </div>
  )
}
export { Header }