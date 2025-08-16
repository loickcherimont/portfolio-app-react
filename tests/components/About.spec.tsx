import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import About from "../../src/components/About";

it("should render About", async () => {
    // ARRANGE
    render(<About />);

    // ASSERT
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
}); 