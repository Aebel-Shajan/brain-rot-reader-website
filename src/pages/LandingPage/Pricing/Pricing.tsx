import styles from "./Pricing.module.css"
import commonStyles from "../../../common.module.css"

const Pricing = () => {
  return (
    <div className={[commonStyles.section, styles.section].join(" ")}>
      <h1>Still not convinced? </h1>
      <div className={styles.comparisonContainer}>
        <div className={styles.comparison}>
          <h2>
            Other products
          </h2>
          <ul>
            <li>
              Uses ai
            </li>
            <li>
              Fanum taxed
            </li>
            <li>
              Slowly poisions you with lead.
            </li>
            <li>
              Boring 🥱
            </li>
            <li>
              Costs money
            </li>
          </ul>
        </div>
        <div className={[styles.comparison, styles.ourProduct].join(" ")}>
          <h2 className={commonStyles.fancyFont}>
            Brain Rot Reader
          </h2>
          <ul>
            <li>
              No ai
            </li>
            <li>
              Fanum tax does not apply
            </li>
            <li>
              Intellectually stimulate you
            </li>
            <li>
              Family guy funny moments
            </li>
            <li>
              Free (I could not be bothered to learn stripe and auth)
            </li>
          </ul>
          <div className={styles.buttonContainer}>
          <button className={commonStyles.button85}>
            Install Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;