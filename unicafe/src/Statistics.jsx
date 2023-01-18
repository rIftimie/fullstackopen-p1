import StatisticLine from "./StatisticLine";

function Statistics({ statistics, advancedStatistics }) {
    return (
        <>
            <h2>Statistics</h2>
            <StatisticLine type={"good"} value={statistics.good} />
            <StatisticLine type={"neutral"} value={statistics.neutral} />
            <StatisticLine type={"bad"} value={statistics.bad} />
            <StatisticLine
                type={"allFeedback"}
                value={advancedStatistics.allFeedback}
            />
            <StatisticLine
                type={"averageFeedback"}
                value={advancedStatistics.averageFeedback}
            />
            <StatisticLine
                type={"positiveFeedback"}
                value={advancedStatistics.positiveFeedback}
            />
        </>
    );
}

export default Statistics;
