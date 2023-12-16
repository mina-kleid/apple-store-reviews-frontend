import styles from './index.module.css'
export const ReviewCard = ( {review} ) => {
    const {author, content, updatedAt, rating} = review

    return (
        <div className={styles.card}>
            <h3 className={styles.author}>{author}</h3>
            <p className={styles.review}>{content}</p>
            <p className={styles.date}>{updatedAt}</p>
            <p className={styles.rating}>Rating: {rating} / 5</p>
        </div>
    );
}
