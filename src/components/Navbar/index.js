import {Link} from 'react-router-dom'
import Themecontext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <Themecontext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const imageChange = () => {
        if (isDarkTheme) {
          return (
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
            />
          )
        }
        return (
          <img
            src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
            alt="theme"
          />
        )
      }
      const ThemeContext = () => {
        toggleTheme()
      }

      const topnav = () => {
        if (isDarkTheme) {
          return 'navi1'
        }
        return 'navi'
      }

      const webLogo = () => {
        if (isDarkTheme) {
          return 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        }
        return 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      }

      return (
        <ul className={topnav()}>
          <li>
            <button type="button">
              <img src={webLogo()} alt="website logo" />
            </button>
          </li>
          <li className="center">
            <Link to="/">
              <h1>Home</h1>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <h1>About</h1>
            </Link>
          </li>
          <li>
            <button data-testid="theme" onClick={ThemeContext} type="button">
              {imageChange()}
            </button>
          </li>
        </ul>
      )
    }}
  </Themecontext.Consumer>
)

export default Navbar
