export const ReviewList = ({ reviews }) => (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.text}</p>
            </li>
        ))}
      </ul>
    </div>
);