import reviews from "./reviews.json"
import styles from "./ReviewCarousel.module.css"
import Marquee from "react-fast-marquee"


const ReviewCarousel = () => {

  const reviewElements = [...reviews, ...reviews].map((review, index) => {
    return (
      <div className={styles.review} key={index}
      >
        <img src={review.pfp} />
        <div className={styles.reviewText}>
          <div className={styles.name}>{review.name}</div>
          <div className={styles.description}>{review.description}</div>
        </div>
      </div>
    )
  })

  return (
    <Marquee pauseOnHover className={styles.reviewContainer}>
      {reviewElements}
    </Marquee>
  );
}

export default ReviewCarousel;