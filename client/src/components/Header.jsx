import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header" style={{
      backgroundColor: "#7d1211",
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="logo">
        <Link to='/' style={{
        color:'white'
      }}>Staying Alert</Link>
      </div>
      <ul>
        <li>
          <Link to='/login' style={{
        color:'white'
      }}>
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to='/register' style={{
        color:'white'
      }}>
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header