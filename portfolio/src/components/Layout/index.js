import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoA from '../../assets/images/logo_a.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {
    FontAwesomeIcon,
    faFontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faInstagram,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar" to="/">
        <Link className="logo" to="/">
            <img src={LogoA} alt="Logo Aditya" />
            <img
                className="sub-logo"
                src={LogoSubtitle}
                alt="Logo Subtitle Aditya"
            />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#33aaee" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#33aaee" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#33aaee" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="nonreferrer"
                    href="https://www.linkedin.com/in/adityadatta11/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#313131" />
                </a>
            </li>
            <li>
                <a
                    className="github"
                    target="_blank"
                    rel="nonreferrer"
                    href="https://github.com/adityadatta11"
                >
                    <FontAwesomeIcon icon={faGithub} color="#313131" />
                </a>
            </li>
            <li>
                <a
                    className="instagram"
                    target="_blank"
                    rel="nonreferrer"
                    href="https://www.instagram.com/views_by_aditya/"
                >
                    <FontAwesomeIcon icon={faInstagram} color="#313131" />
                </a>
            </li>
            <li>
                <a
                    className="facebook"
                    target="_blank"
                    rel="nonreferrer"
                    href="https://www.facebook.com/adityadatta11"
                >
                    <FontAwesomeIcon icon={faFacebook} color="#313131" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
