import React, {useContext, useState} from "react";
import {Filters} from "./components";
import {ReviewContext} from "../../context/reviewContext";
import {APP_FILTERS} from "../../utils/filter";

export const Header = () => {
    const apps = APP_FILTERS;
    const timeFrames = ['2 days', 'week', 'month', 'year'];

    const { getReviews, loading } = useContext(ReviewContext);

    const [selectedApp, setSelectedApp] = useState(apps[0]);
    const [timeFrame, setTimeFrame] = useState(timeFrames[0]);

    const handleAppSelection = (e) => {
        setSelectedApp(e.target.value);
        getReviews(e.target.value);
    };

    const handleTimeFrameSelection = (timeFrame) => {
        setTimeFrame(timeFrame);
    };

    return (
        <Filters
        apps={apps}
        selectedApp={selectedApp}
        onAppIdChange={handleAppSelection}
        isAppSelectionDisabled={loading}
        timeFrames={timeFrames}
        selectedTimeFrame={timeFrame}
        onTimeFrameChanged={handleTimeFrameSelection}
        isTimeFrameDisabled={loading}
        />
    );
}