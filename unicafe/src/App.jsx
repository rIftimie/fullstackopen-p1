import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

function App() {
    const [statistics, setStatistics] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });
    const allFeedback = statistics.good + statistics.bad + statistics.neutral;
    const averageFeedback =
        (statistics.good * 1 + statistics.bad * -1) / allFeedback;
    const positiveFeedback = (statistics.good / allFeedback) * 100;

    function addGood() {
        setStatistics({
            ...statistics,
            good: statistics.good + 1,
        });
    }
    function addNeutral() {
        setStatistics({
            ...statistics,
            neutral: statistics.neutral + 1,
        });
    }
    function addBad() {
        setStatistics({
            ...statistics,
            bad: statistics.bad + 1,
        });
    }

    return (
        <>
            <header>
                <h2>Give Feedback!</h2>
                <Button type={"good"} onClick={addGood} />
                <Button type={"neutral"} onClick={addNeutral} />
                <Button type={"bad"} onClick={addBad} />
            </header>
            {allFeedback && (
                <main>
                    <Statistics
                        statistics={statistics}
                        advancedStatistics={{
                            allFeedback,
                            averageFeedback,
                            positiveFeedback,
                        }}
                    />
                </main>
            )}
        </>
    );
}

export default App;
