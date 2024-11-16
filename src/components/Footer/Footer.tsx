import { SiGmail } from "react-icons/si";
import styles from "./Footer.module.css"
import { FaBluesky, FaChrome, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a 
      target="_blank"
      href="https://mail.google.com/mail/?view=cm&fs=1&to=aebel.projects@gmail.com&su=Contact&body=[You can contact me about anything 😀]">
        <SiGmail />
        Contact me
      </a>
      <a
        target="_blank"
        href="https://github.com/Aebel-Shajan"
      >
        <FaGithub />
        Github
      </a>
      <a 
      target="_blank"
      href="https://bsky.app/profile/aebel.bsky.social">
        <FaBluesky />
        BlueSky
      </a>
      <a 
      target="_blank"
      href="https://chromewebstore.google.com/search/aebel">
        <FaChrome />
        Check out my other chrome extensions
      </a>

      © Made by aebel
    </div>
  );
}

export default Footer;