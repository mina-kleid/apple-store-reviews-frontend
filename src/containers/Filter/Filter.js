import React, {useContext} from "react";
import {ReviewContext} from "../../context/reviewContext";

export const Filter = () => {
    const { fetchReviews } = useContext(ReviewContext);

    return (
        <div>
            <button onClick={ () => fetchReviews("595068606") }> Click me</button>
        </div>
    )
}