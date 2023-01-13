import Part from "./components/Part";

function Content(props) {
    return (
        <div>
            <Part item={props.parts[0]} />
            <Part item={props.parts[1]} />
            <Part item={props.parts[2]} />
        </div>
    );
}

export default Content;
