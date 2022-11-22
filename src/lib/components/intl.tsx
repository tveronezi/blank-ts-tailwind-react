import { createContext } from "react";
import { IntlProvider } from "react-intl";
import English from "../lang/en.json";

const Context = createContext({});

const local = "en";
const lang = English;

export function Intl(props: { children: JSX.Element }) {
    return (
        <Context.Provider value={{ local }}>
            <IntlProvider messages={lang} locale={local}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
}
