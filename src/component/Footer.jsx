import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export function SimpleFooter() {
  return (
    <footer className="w-full bg-base-200 p-8">
      <div className="flex flex-col items-center bg-white text-center gap-y-6 gap-x-12">
        <div className="flex gap-8 justify-center">
          <a 
            href="https://www.facebook.com/faysal.sharker.140/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a 
            href="https://www.instagram.com/faysal_sarker_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pink-600 hover:text-pink-800"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a 
            href="https://www.linkedin.com/in/faysalsarker-dev/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a 
            href="https://github.com/faysalsarker-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-900 hover:text-gray-700"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <hr className="my-8 border-blue-gray-50 w-3/4 mx-auto" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 We prod
      </Typography>
    </footer>
  );
}
