import { expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from "../../src/components/Header";

it("should render Header", async () => {
    // ARRANGE
    render(<Header />);

    // ACT

    // ASSERT
    expect(screen.getByText("HOME")).toBeInTheDocument();
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
    expect(screen.getByText("PROJECTS")).toBeInTheDocument();
    expect(screen.getByText("CONTACT")).toBeInTheDocument();
})