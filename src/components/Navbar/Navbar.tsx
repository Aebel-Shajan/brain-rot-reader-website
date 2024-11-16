import styles from "./Navbar.module.css"
import commonStyles from "../../common.module.css"
import logo from "../../assets/genz-screenreader-logo.png"

const Navbar = () => {
  function redirect(url: string) {
		return () => window.open(url)
	  }

  return ( 
  <div className={styles.navbar}>
    <div 
      className={styles.branding}
      onClick={redirect("https://chromewebstore.google.com/detail/subway-surfers-screen-rea/jcijfneifjnhbgahlokgkmpcnocgpegd")}
      >
      <img src={logo} />
      <h1 className={commonStyles.fancyFont}>
        Brain Rot Reader
      </h1>
    </div>
    <div className={styles.buttonContainer}>
      <a href="#home">
        Home
      </a>
      <a href="#features"
      >
        Features
      </a>
      <a href="#pricing">
        Pricing
      </a>
    </div>
  </div>     
  );
}

export default Navbar;
