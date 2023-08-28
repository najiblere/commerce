import '../styles/nav.scss'
import { useLocation, Link } from 'react-router-dom'
import { useRecoilValueLoadable } from 'recoil'
import { getSettingsApi } from '../states/contact'

function TopNav(params) {
  
  const data = useRecoilValueLoadable(getSettingsApi)
  const logo = data.state === "hasValue" ? data.contents : {}
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundImage: 'url(/grain.png)', backgroundColor: '#00f900' }}>
      <a className="navbar-brand ml-4 pl-1" href="/">
        <img src={'/nasLogo.png'} className=" img-fluid" height={100} width={100}  alt='nedux Logo' />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""><img src={'/menu-icon.png'}></img> </span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
            
           <li className="nav-item">
            <a className="nav-link" href="/#/members">MEMBERS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">SUBCOMMITTEES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">CALENDER</a>
          </li>
          <li className="nav-item dropdown p-0">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              NEWS & MEDIA
            </a>
            <ul className="dropdown-menu p-0 w-200" aria-labelledby="navbarScrollingDropdown">
              <li><Link className="dropdown-item w-100" to="/news">PRESS RELEASE</Link></li>
              <li><hr className="dropdown-divider m-0 p-0" /></li>
              <li><Link className="dropdown-item w-100" to="/news">LETTERS</Link></li>
              <li><hr className="dropdown-divider m-0 p-0" /></li>
              <li><Link className="dropdown-item w-100" to="/news">BLOGS</Link></li>
              <li><hr className="dropdown-divider m-0 p-0" /></li>
              <li><Link className="dropdown-item w-100" to="/news">IN THE NEWS</Link></li>
              <li><Link className="dropdown-item w-100" to="/news">ON THE HOUSE FLOOR</Link></li>

            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/about">ABOUT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default TopNav
