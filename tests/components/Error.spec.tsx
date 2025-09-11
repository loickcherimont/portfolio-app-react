import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import Error from "../../src/components/Error"

describe("Error component", () => {
  it("renders error message", () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    expect(screen.getByText("Error 404")).toBeInTheDocument();
    expect(
      screen.getByText("This path doesn't exist, use instead", { exact: false })
    ).toBeInTheDocument();
  });

  it("renders a link to root", () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /this link for root/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
