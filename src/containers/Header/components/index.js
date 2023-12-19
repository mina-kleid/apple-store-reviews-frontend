import React from "react";
import styles from './index.module.css'

export const Filters = (
    {
        apps,
        selectedApp,
        onAppIdChange,
        isAppSelectionDisabled,
        timeFrames,
        selectedTimeFrame,
        onTimeFrameChanged,
        isTimeFrameDisabled,
        onRefreshClicked
    }) => {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <h2>Select an App</h2>
                    <select className={styles.dropdown} disabled={isAppSelectionDisabled} value={selectedApp}
                            onChange={onAppIdChange}>
                        {apps.map((app) => (
                            <option key={app.id} value={app.id}>
                                {app.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <h2>Select Time Frame</h2>
                    {timeFrames.map((frame) => (
                        <label className={styles.selectionGroup} key={frame.value}>
                            <input disabled={isTimeFrameDisabled}
                                   type="radio"
                                   value={frame.label}
                                   name="timeFrame"
                                   checked={selectedTimeFrame === frame.value}
                                   onChange={() => onTimeFrameChanged(frame)}
                            />
                            {frame.label}
                        </label>
                    ))}
                </div>
            </div>
            <button className={styles.button} onClick={onRefreshClicked}>Force update reviews</button>
        </div>
    );
}