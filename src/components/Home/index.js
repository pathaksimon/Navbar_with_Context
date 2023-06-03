import './index.css'
import Navbar from '../Navbar'
import Themecontext from '../../context/ThemeContext'

const Home = () => (
  <Themecontext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const makesChange = () => {
        if (isDarkTheme) {
          return 'Homo12'
        }
        return 'Homo'
      }

      const container321 = () => {
        if (isDarkTheme) {
          return 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        }
        return 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      }

      return (
        <div className={makesChange()}>
          <Navbar />
          <div className="bg-container2">
            <img src={container321()} className="homie" alt="home" />
            <h1>Home</h1>
          </div>
        </div>
      )
    }}
  </Themecontext.Consumer>
)

export default Home
