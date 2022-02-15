type ButtonProps = {
    method: () => void;
    name: string;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            style={{
                margin: "0 10px"
            }}
            onClick={props.method}>
            {props.name}
        </button>
    );
}