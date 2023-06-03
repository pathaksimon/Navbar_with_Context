import Navbar from '../Navbar'
import Themecontext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <Themecontext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const makesChange321 = () => {
        if (isDarkTheme) {
          return 'About123'
        }
        return 'About1'
      }

      const container123 = () => {
        if (isDarkTheme) {
          return 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        }

        return 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      }

      return (
        <div className={makesChange321()}>
          <Navbar />
          <div className="bg-container3">
            <img src={container123()} className="aboutie" alt="about" />
            <h1>About</h1>
          </div>
        </div>
      )
    }}
  </Themecontext.Consumer>
)

export default About
