import StatisticLine from "./StatisticLine";

function Statistics({ statistics, advancedStatistics }) {
    return (
        <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <StatisticLine type={"good"} value={statistics.good} />
                    <StatisticLine
                        type={"neutral"}
                        value={statistics.neutral}
                    />
                    <StatisticLine type={"bad"} value={statistics.bad} />
                    <StatisticLine
                        type={"all"}
                        value={advancedStatistics.allFeedback}
                    />
                    <StatisticLine
                        type={"average"}
                        value={advancedStatistics.averageFeedback}
                    />
                    <StatisticLine
                        type={"positive"}
                        value={advancedStatistics.positiveFeedback}
                    />
                </tbody>
            </table>
        </>
    );
}

export default Statistics;
