import React, {useContext} from "react";
import {ReviewContext} from "../../context/reviewContext";

export const Filter = () => {
    const { getReviews } = useContext(ReviewContext);

    return (
        <div>
            <button onClick={ () => getReviews("595068606") }> Click me</button>
        </div>
    )
}