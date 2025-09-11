import { fireEvent, render, screen } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import Home from "../../src/components/Home";

beforeAll(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
});

afterAll(() => {
    (window.alert as any).mockRestore();
});

describe("Home component", () => {
    it("should render developer photo, name and position", async () => {
        // ARRANGE
        render(<Home />);

        // ACT

        // ASSERT
        expect(screen.getByAltText("Developer's photo")).toBeInTheDocument();
        expect(screen.getByText("Loick CHERIMONT")).toBeInTheDocument();
        expect(screen.getByText("Spring/TypeScript Developer")).toBeInTheDocument();
    });

    it("should render 'Hire me' and 'Get my CV' buttons", async () => {
        // ARRANGE
        render(<Home />)

        // ACT

        // ASSERT
        expect(screen.getByText("Hire me")).toBeInTheDocument();
        expect(screen.getByText("Get my CV")).toBeInTheDocument();
    });

    it("should click Get my CV triggers alert", async () => {
        // ARRANGE
        render(<Home />)

        // ACT

        // ASSERT
        fireEvent.click(screen.getByText("Get my CV"));
        expect(screen.getByText("Hire me")).toBeInTheDocument();
        expect(window.alert).toHaveBeenCalledWith("CV downloaded");
    });
});
