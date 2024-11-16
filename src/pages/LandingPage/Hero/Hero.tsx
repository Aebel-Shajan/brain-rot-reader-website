import commonStyles from "../../../common.module.css"
import ReviewCarousel from "../../../components/ReviewCarousel/ReviewCarousel"
import styles from "./Hero.module.css"

function Hero() {
	function redirect(url: string) {
		return () => window.open(url)
	  }
	
	return (
		<div className={[commonStyles.section, styles.section].join(" ")}>
			<div className={styles.mainContent}>
				<div className={styles.mainText}>
					<h1>Real time brain rot directly from the browser. 🚀 </h1>
					<p>
						Browsing the web is boring, i would much rather go on tiktok or yt shorts.
						This extension turns everything into easy to watch subway surfer gameplay.
					</p>
					<button 	
						className={styles.button85}
						onClick={redirect("https://chromewebstore.google.com/detail/subway-surfers-screen-rea/jcijfneifjnhbgahlokgkmpcnocgpegd")}>
						Install the extension
					</button>
				</div>
				<div className={styles.previewContainer}>
					<iframe
						src="https://www.youtube.com/embed/JuJiM2TYbiw?autoplay=1&loop=1&playlist=JuJiM2TYbiw&mute=1"
					/>
				</div>

			</div>
			<ReviewCarousel />
		</div>
	)
}

export default Hero