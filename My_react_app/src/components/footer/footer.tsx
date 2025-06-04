import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter,faFacebook,faDiscord,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(){
  return(
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
      <p>Follow us on : 
        <a href="https://twitter.com"  target="_blank" className="text-blue-400 hover:underline"> <FontAwesomeIcon icon={faSquareXTwitter} /> </a> 
        <a href="https://facebook.com"  target="_blank" className="text-blue-400 hover:underline"> <FontAwesomeIcon icon={faFacebook} /> </a> 
        <a href="https://discord.com"  target="_blank" className="text-blue-400 hover:underline"> <FontAwesomeIcon icon={faDiscord} /> </a>
        <a href="https://github.com"  target="_blank" className="text-blue-400 hover:underline"> <FontAwesomeIcon icon={faGithub} /> </a> 
        <a href="https://www.linkedin.com/in/yahyaouimedaziz-it" target="_blank" className="text-blue-400 hover:underline"> <FontAwesomeIcon icon={faLinkedin} /> </a>
      </p>
    </footer>

  );
}

export default Footer;