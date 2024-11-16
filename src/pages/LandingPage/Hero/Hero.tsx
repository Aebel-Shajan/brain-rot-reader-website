import commonStyles from "../../../common.module.css"
import styles from "./Hero.module.css"

function Hero() {
	return (
		<div className={[commonStyles.section, styles.section].join(" ")}>
				<div className={styles.mainText}>
					<h1>Real time brain rot directly from the browser. 🚀 </h1>
					<p>
						Browsing the web is boring, i would much rather go on tiktok or yt shorts.
						This extension turns everything into easy to watch subway surfer gameplay.
					</p>
					<button>
					Install the extension
				</button>
			</div>
		</div>
	)
}

export default Hero