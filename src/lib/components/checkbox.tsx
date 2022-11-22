import { useState } from "react";

function Icon() {
    return (
        <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.68815 12.222L0.721758 7.86299C0.481913 7.65248 0.458125 7.28805 0.668634 7.0482C0.879717 6.8083 1.24478 6.78502 1.48336 6.99451L5.54092 10.5561L12.9583 1.27439C13.1573 1.02472 13.5207 0.984792 13.7697 1.1833C14.0194 1.3829 14.0593 1.74622 13.8602 1.99474L5.68815 12.222Z"
                fill="#005E47"
                stroke="#005E47"
            />
        </svg>
    );
}

export enum CheckboxKind {
    Disabled,
    Normal
}

const TEXT_COLOR = {
    [CheckboxKind.Disabled]: "text-grey-3",
    [CheckboxKind.Normal]: "text-white"
};

function getIconColor(kind: CheckboxKind, checked: boolean) {
    if (kind === CheckboxKind.Disabled) {
        return "bg-grey-4";
    }
    if (checked) {
        return "bg-green-3";
    }
    return "bg-grey-4 hover:bg-grey-3";
}

export function Checkbox(props: {
    kind?: CheckboxKind;
    label?: string;
    checked?: boolean;
    onClick: () => void;
}) {
    const { kind = CheckboxKind.Normal, label, onClick } = props;
    const [checked, setChecked] = useState(props.checked || false);
    const disabled = kind === CheckboxKind.Disabled;
    return (
        <label
            role="checkbox"
            aria-disabled={disabled}
            aria-checked={checked}
            className={`flex items-center gap-[10px] font-[600] leading-[19.2px] ${TEXT_COLOR[kind]}`}
            onClick={() => {
                if (disabled) {
                    return;
                }
                setChecked((current) => !current);
                onClick();
            }}
        >
            <div
                className={`h-[30px] w-[30px] rounded grid place-content-center ${getIconColor(
                    kind,
                    checked
                )}`}
            >
                {checked && (
                    <div className="-rotate-6">
                        <Icon />
                    </div>
                )}
            </div>
            {label}
        </label>
    );
}
