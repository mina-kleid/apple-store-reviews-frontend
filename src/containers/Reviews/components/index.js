import {Review} from "../../Review/Review";
import styles from './index.module.css'
export const ReviewList = ({ reviews }) => (
    <div>
      <h2>Reviews</h2>
      <ul className={styles.noBullet}>
        {reviews.map((review, index) => (
            <li key={index}>
                <Review review={review}/>
            </li>
        ))}
      </ul>
    </div>
);