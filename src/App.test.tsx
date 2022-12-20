import { render, screen } from "@testing-library/react";
import App from "./App";

test("placeholder", () => {
    render(<App />);
    expect(screen.getByText(/center/i)).toBeInTheDocument();
});
