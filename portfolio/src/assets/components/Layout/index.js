import './index.scss'
import { Link } from 'react-router-dom'
import LogoA from '../../../assets/images/logo_a.png'
import LogoSubtitle from '../../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className="nav-bar" to='/'>
        <Link className="logo" to='/'>
            <img src={LogoA} alt="Logo Aditya" />
            <img className="sub-logo" src={LogoSubtitle} alt="Logo Subtitle Aditya" />
        </Link>
    </div>
)

export default Sidebar