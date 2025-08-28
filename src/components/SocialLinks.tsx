import { faFacebook, faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLinks() {
  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:top-1/2 md:left-4 md:flex md:flex-col md:gap-4 transform -translate-y-1/2">
        <a
          href="https://www.facebook.com/profile.php?id=100013441156247"
          target="_blank"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://t.me/keovuththana"
          target="_blank"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
        <a
          href="https://github.com/Vuththana"
          target="_blank"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/keo-vuththana-947593326/"
          target="_blank"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6 bg-black/70 px-6 py-2 rounded-full md:hidden">
        <a
          href="https://www.facebook.com/profile.php?id=100013441156247"
          target="_blank"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://t.me/keovuththana"
          target="_blank"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faTelegram} size="lg" />
        </a>
        <a
          href="https://github.com/Vuththana"
          target="_blank"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/keo-vuththana-947593326/"
          target="_blank"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
    </div>
  );
}
