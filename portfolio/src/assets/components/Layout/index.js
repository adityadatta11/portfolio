import './index.scss'
import { Link } from 'react-router-dom'
import LogoA from '../../../assets/images/logo_a.png'
import LogoSubtitle from '../../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className="nav-bar" to='/'>
        <Link>
            <img src={LogoA} alt="Logo Aditya" />
            <img src={LogoSubtitle} alt="Logo Subtitle Aditya" />
        </Link>
    </div>
)

export default Sidebar