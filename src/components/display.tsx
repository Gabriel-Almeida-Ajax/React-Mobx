import Button from "./button";
import { useTranslation } from "react-i18next";

type MethodType = {
    method: () => void;
    name: string;
}

type DisplayProps = {
    counter: number;
    methods: MethodType[];
}

export default function Display(props: DisplayProps) {
    const { t } = useTranslation();

    return (
        <div
            style={{
                textAlign: "center",
            }}>

            <h1>
                {t('Segundos: ')}{props.counter}
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