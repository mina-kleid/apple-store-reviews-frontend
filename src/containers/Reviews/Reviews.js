import React, {useContext} from "react";
import {ReviewContext} from "../../context/reviewContext";
import {ReviewList} from "./components";

export const Reviews = () => {
    const {reviews, loading, error } = useContext(ReviewContext);

    if (loading || error) {
        return (
            <div>
                <h1>Loading or Error</h1>
            </div>
        );
    }

    return (
        <div>
            <ReviewList reviews={reviews}/>
        </div>
    )
}