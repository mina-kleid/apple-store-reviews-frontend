import React, {useContext} from "react";
import {ReviewContext} from "../../context/reviewContext";
import {ReviewList} from "./components";
import {LoadingOrError} from "../../components/loadingOrError";

export const Reviews = () => {
    const { reviews, loading, error } = useContext(ReviewContext);

    if (loading || error) {
        return LoadingOrError(loading, error)
    }

    return (
        <div>
            <ReviewList reviews={reviews}/>
        </div>
    )
}