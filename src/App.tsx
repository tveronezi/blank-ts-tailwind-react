import { useIntl } from "react-intl";
import { Checkbox, CheckboxKind } from "./lib/components/checkbox";

function App() {
    const { formatMessage } = useIntl();
    return (
        <div className="h-screen bg-gray-800 grid place-content-center gap-1">
            <Checkbox onClick={() => {}} label={formatMessage({ id: "normal.capitalized" })} />
            <Checkbox
                kind={CheckboxKind.Disabled}
                onClick={() => {}}
                label={formatMessage({ id: "disabled.capitalized" })}
            />
        </div>
    );
}

export default App;
