import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                number: 1,
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                number: 2,
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                number: 3,
                name: "State of a component",
                exercises: 14,
            },
        ],
    };
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total
                totalExercises={
                    course.parts.filter((part) => part.exercises).length
                }
            />
        </div>
    );
};

export default App;
