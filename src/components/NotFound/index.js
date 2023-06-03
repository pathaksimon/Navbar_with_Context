import './index.css'
import Navbar from '../Navbar'
import context from '../../context/ThemeContext'

const NotFound = () => (
  <context.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeinBack = () => {
        if (isDarkTheme) {
          return 'NotFound12'
        }
        return 'NotFound'
      }

      const alti = () => {
        if (isDarkTheme) {
          return 'website logo'
        }

        return 'theme'
      }

      return (
        <div className={changeinBack()}>
          <Navbar />
          <div className="colonel">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="colonel"
            />
            <h1>Lost Your Way</h1>
            <p>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </context.Consumer>
)

export default NotFound
