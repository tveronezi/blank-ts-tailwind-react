import { CheckIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export enum CheckboxKind {
    Disabled,
    Normal
}

export function Checkbox(props: {
    kind?: CheckboxKind;
    ariaLabel?: string;
    checked?: boolean;
    onClick: () => void;
}) {
    const { kind = CheckboxKind.Normal, ariaLabel, onClick } = props;
    const [checked, setChecked] = useState(props.checked);
    const disabled = kind === CheckboxKind.Disabled;
    return (
        <div
            aria-label={ariaLabel}
            aria-disabled={disabled}
            aria-checked={checked}
            role="checkbox"
            className={`m-1 h-5 w-5 p-1 ${
                disabled
                    ? "bg-grey-4 border-grey-4 hover:bg-grey-3 hover:border-grey-3"
                    : "bg-green-3 border-green-3"
            } border-2 rounded grid place-content-center checked:bg-green-3`}
            onClick={() => {
                if (disabled) {
                    return;
                }
                setChecked((current) => !current);
                onClick();
            }}
        >
            <input type="checkbox" hidden readOnly checked={checked} />
            {checked && <CheckIcon className={"h-4 w-4 fill-green-6"} />}
        </div>
    );
}
