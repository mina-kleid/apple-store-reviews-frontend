import React, {useContext, useState} from "react";
import {Filters} from "./components";
import {ReviewContext} from "../../context/reviewContext";
import {APP_FILTERS, TIME_FRAME_FILTERS} from "../../utils/filter";

export const Header = () => {
    const apps = APP_FILTERS;
    const timeFrames = TIME_FRAME_FILTERS

    const { getReviews, loading } = useContext(ReviewContext);

    const [selectedApp, setSelectedApp] = useState(apps[0].id);
    const [timeFrame, setTimeFrame] = useState(timeFrames[0]);

    const handleAppSelection = (e) => {
        console.log(e.target.value);
        setSelectedApp(e.target.value);
        getReviews(e.target.value, timeFrame.value);
    };

    const handleTimeFrameSelection = (timeFrame) => {
        console.log(timeFrame)
        setTimeFrame(timeFrame);
        getReviews(selectedApp, timeFrame.value);
    };

    return (
        <Filters
        apps={apps}
        selectedApp={selectedApp}
        onAppIdChange={handleAppSelection}
        isAppSelectionDisabled={loading}
        timeFrames={timeFrames}
        selectedTimeFrame={timeFrame.value}
        onTimeFrameChanged={handleTimeFrameSelection}
        isTimeFrameDisabled={loading}
        />
    );
}