import {  faFacebook, faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialLinks() {
  return (
    <div className='w-[30px] fixed sm:top-[500px] top-[700px] sm:left-2 right-2 items-center'>
        <ul>
            <li className='my-3 hover:text-blue-500 cursor-pointer'>
            <a href="https://www.facebook.com/profile.php?id=100013441156247" target='_blank'>
            <FontAwesomeIcon icon={faFacebook} size='2x'/></a>
            </li>
            <li className='my-3 hover:text-blue-500 cursor-pointer'>
            <a href="https://t.me/keovuththana" target='_blank'>
            <FontAwesomeIcon icon={faTelegram} size='2x'/></a>
            </li>
            <li className='my-3 hover:text-blue-500 cursor-pointer'>
            <a href="https://github.com/Vuththana" target='_blank'>
            <FontAwesomeIcon icon={faGithub} size='2x'/></a>
            </li>
            <li className='my-3 hover:text-blue-500 cursor-pointer'>
            <a href="https://www.linkedin.com/in/keo-vuththana-947593326/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
            </li>
        </ul>
    </div>
  )
}
