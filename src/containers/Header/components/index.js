import React from "react";

export const Filters = (
    {
        apps,
        selectedApp,
        onAppIdChange,
        isAppSelectionDisabled,
        timeFrames,
        selectedTimeFrame,
        onTimeFrameChanged,
        isTimeFrameDisabled
    }) => {
    return (
        <div>
            <h2>Select an App</h2>
            <select disabled={isAppSelectionDisabled} value={selectedApp} onChange={onAppIdChange}>
                <option value="">Select an App</option>
                {apps.map((app) => (
                    <option key={app.id} value={app.id}>
                        {app.name}
                    </option>
                ))}
            </select>
            <h2>Select Time Frame</h2>
            {timeFrames.map((frame) => (
                <label key={frame}>
                    <input disabled={isTimeFrameDisabled}
                        type="radio"
                        value={frame}
                        name="timeFrame"
                        checked={selectedTimeFrame === frame}
                        onChange={() => onTimeFrameChanged(frame)}
                    />
                    {frame}
                </label>
            ))}
        </div>
    );
}