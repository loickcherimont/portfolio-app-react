import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Achievements from "../../src/components/Achievements";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mock the useNavigate hook
const mockNavigate = vi.fn();
vi.mock("react-router", async () => ({
  ...(await vi.importActual("react-router")),
  useNavigate: () => mockNavigate
}));

// Test data
const fakeProjects = [
  { id: 1, title: "Portfolio", imageUrl: "http://placehold.co/200" },
  { id: 2, title: "Chat App", imageUrl: "http://placehold.co/200" },
];

describe("Achievements component", () => {
  beforeEach(() => {
    // Mock the global fetch
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => fakeProjects,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders title PROJECTS", () => {
    render(
      <MemoryRouter>
        <Achievements />
      </MemoryRouter>
    );
    expect(screen.getByText("PROJECTS")).toBeInTheDocument();
  });

  it("loads and displays projects from API", async () => {
    render(
      <MemoryRouter>
        <Achievements />
      </MemoryRouter>
    );

    // Wait for projects to be displayed and verify each one
    await waitFor(() => {
      fakeProjects.forEach(project => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
        expect(screen.getByAltText(`Preview for project no.${project.id}`)).toBeInTheDocument();
      });
    });
  });

  it("navigates to project page when clicking See Project button", async () => {
    render(
      <MemoryRouter>
        <Achievements />
      </MemoryRouter>
    );

    // Wait for the button to be available and click it
    const buttons = await screen.findAllByText("See Project");
    fireEvent.click(buttons[0]);

    // Verify navigation occurred with correct project ID
    expect(mockNavigate).toHaveBeenCalledWith("/project/1");
  });

  it("handles API error gracefully", async () => {
    // Mock a failed API call
    global.fetch = vi.fn().mockRejectedValue(new Error("API Error"));

    render(
      <MemoryRouter>
        <Achievements />
      </MemoryRouter>
    );

    // Component should not crash and render the basic structure
    expect(screen.getByText("PROJECTS")).toBeInTheDocument();
  });
});