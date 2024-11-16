import styles from "./Navbar.module.css"
import commonStyles from "../../common.module.css"

const Navbar = () => {
  return ( 
  <div className={styles.navbar}>

    <h1 className={commonStyles.fancyFont}>
      Brain Rot Reader
    </h1>
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
