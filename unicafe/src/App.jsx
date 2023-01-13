import { useState } from "react";

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    function addGood() {
        setGood(good + 1);
    }
    function addNeutral() {
        setNeutral(neutral + 1);
    }
    function addBad() {
        setBad(bad + 1);
    }

    return (
        <>
            <header>
                <h2>Give Feedback!</h2>
                <button onClick={() => addGood()}>good</button>
                <button onClick={() => addNeutral()}>neutral</button>
                <button onClick={() => addBad()}>bad</button>
            </header>
            <section>
                <h2>Statistics</h2>
                <p>good: {good}</p>
                <p>neutral: {neutral}</p>
                <p>bad: {bad}</p>
            </section>
        </>
    );
}

export default App;
