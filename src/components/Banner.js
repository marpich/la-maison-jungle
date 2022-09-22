import logo from '../assets/logo.png'
import '../styles/Banner.css'
import Recommendation from './Recommendation'

function Banner() {
  return (<div className='lmj-banner'>
            <div className="lmj-banner-row">
              <img src={logo} alt='La maison jungle' className='lmj-logo' />
              <h1 className='lmj-title'>La maison jungle</h1>
            </div>
            <p><Recommendation /></p>
          </div>
)
}

export default Banner
