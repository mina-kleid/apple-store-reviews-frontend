import React, {useContext, useEffect, useState} from "react";
import {Filters} from "./components";
import {ReviewContext} from "../../context/reviewContext";
import {APP_FILTERS, TIME_FRAME_FILTERS} from "../../utils/filter";

export const Header = () => {
    const apps = APP_FILTERS;
    const timeFrames = TIME_FRAME_FILTERS

    const { getReviews, loading, refreshReviews } = useContext(ReviewContext);

    const [selectedAppId, setSelectedAppId] = useState(apps[0].id);
    const [timeFrame, setTimeFrame] = useState(timeFrames[0]);


    useEffect(() => {
        getReviews(selectedAppId)
    }, []);

    const handleAppSelection = (e) => {
        setSelectedAppId(e.target.value);
        getReviews(e.target.value, timeFrame.value);
    };

    const handleTimeFrameSelection = (timeFrame) => {
        setTimeFrame(timeFrame);
        getReviews(selectedAppId, timeFrame.value);
    };

    const handleOnRefreshClicked= async () => {
        await refreshReviews(selectedAppId)
        await getReviews(selectedAppId)
    }

    return (
        <Filters
        apps={apps}
        selectedApp={selectedAppId}
        onAppIdChange={handleAppSelection}
        isAppSelectionDisabled={loading}
        timeFrames={timeFrames}
        selectedTimeFrame={timeFrame.value}
        onTimeFrameChanged={handleTimeFrameSelection}
        isTimeFrameDisabled={loading}
        onRefreshClicked={handleOnRefreshClicked}
        />
    );
}