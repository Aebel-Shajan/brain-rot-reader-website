import commonStyles from "../../../common.module.css";
import preview1 from "../../../assets/screenshots/preview_1.png"
import preview2 from "../../../assets/screenshots/preview_2.png"
import preview3 from "../../../assets/screenshots/preview_3.png"

import styles from "./UseCases.module.css"
const UseCases = () => {
  return (
    <div className={commonStyles.section}>
      <div className={styles.leftUseCase}>
        <div>
          <h1>
            Level up your learning 🤓
          </h1>
          <div>
            <p>
              Our extension is proven to increase information retention by
              10,000,000,000%. Use this extension to digest articles, research
              papers and lesson notes in a more accessible way 😀.
            </p>
            <p>

              I used it to
              aid me in my web dev journey, I can finally center a div.
            </p>
          </div>
        </div>
        <img src={preview1} />
      </div>
      <div className={styles.rightUseCase}>
        <div>
          <h1>
            Save valuable time ⏳
          </h1>
          <div>
            Most of the content on the web is slop. You
            should not have to exert effort using your eyes to read. Let our
            extension do it for you. Useful for long ahh twitter, reddit, youtube comments/posts.
          </div>
        </div>
        <img src={preview2} />
      </div>
      <div className={styles.leftUseCase}>
        <div>
          <h1>
            Customise to your liking 👨‍🎨
          </h1>
          <div>
            Choose from a variety of background videos. We got subway surfers,
            minecraft parkour, family guy funny moments and monke. If none of these
            are stimulating enough, add your own videos from the settings!
          </div>
        </div>
        <img src={preview3} />
      </div>
    </div>
  );
}

export default UseCases;