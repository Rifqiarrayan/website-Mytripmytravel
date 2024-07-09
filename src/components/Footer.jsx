import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div id="copyright" className="text-center w-full py-12 mt-12">
      <div className="wrapper">
        <div className="social-media-icons flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/profile.php?id=100061329490962" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/raalipe_257" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.tiktok.com/@ra_alipe_257" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </div>
        &copy; 2024. <b>MyTrip MyTravel-Mulmed</b> All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;