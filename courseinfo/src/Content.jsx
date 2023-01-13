function Content(props) {
    const parts = props.parts.map((part) => (
        <p key={part.number}>
            Part {part.number} - {part.title}
            <br />
            Exercise: {part.exercise}
        </p>
    ));
    return <>{parts}</>;
}

export default Content;
