import styles from "./Navbar.module.css"
import commonStyles from "../../common.module.css"
import logo from "../../assets/genz-screenreader-logo.png"

const Navbar = () => {
  return ( 
  <div className={styles.navbar}>
    <div className={styles.branding}>
      <img src={logo} />
      <h1 className={commonStyles.fancyFont}>
        Brain Rot Reader
      </h1>
    </div>
    <div className={styles.buttonContainer}>
      <button>
        Home
      </button>
      <button>
        Preview
      </button>
      <button>
        Reviews
      </button>
    </div>
  </div>     
  );
}

export default Navbar;
