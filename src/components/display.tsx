import Button from "./button";

type MethodType = {
    method: () => void;
    name: string;
}

type DisplayProps = {
    counter: number;
    methods: MethodType[];
}

export default function Display(props: DisplayProps) {
    return (
        <div
            style={{
                textAlign: "center",
            }}>

            <h1>
                {props.counter}
            </h1>

            {props.methods.map((method) =>
                <Button
                    key={method.name}
                    method={method.method}
                    name={method.name}
                />
            )}

        </div>
    );
}