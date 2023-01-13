import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const App = () => {
    const course = "Half Stack application development";
    const parts = [
        {
            number: 1,
            title: "Fundamentals of React",
            exercise: 10,
        },
        {
            number: 2,
            title: "Using props to pass data",
            exercise: 7,
        },
        {
            number: 3,
            title: "State of a component",
            exercise: 14,
        },
    ];
    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total
                totalExercises={parts.filter((part) => part.exercise).length}
            />
        </div>
    );
};

export default App;
