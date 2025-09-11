// ProjectComponent.test.tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import ProjectComponent from "../../src/components/ProjectComponent";

describe("ProjectComponent", () => {
  const mockProject = {
    id: 1,
    title: "My Project",
    description: "A test project",
    imageUrl: "http://example.com/image.png",
    githubUrl: "http://github.com/test/project",
    techs: ["React", "TypeScript"],
  };

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("fetches and displays project details", async () => {
    // Mock fetch
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockProject,
    }) as any;

    render(
      <MemoryRouter initialEntries={["/project/1"]}>
        <Routes>
          <Route path="/project/:id" element={<ProjectComponent />} />
        </Routes>
      </MemoryRouter>
    );

    // Vérifie le titre
    await waitFor(() =>
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        mockProject.title
      )
    );

    // Vérifie l'image
    expect(
      screen.getByAltText(`Preview for project no.${mockProject.id}`)
    ).toHaveAttribute("src", mockProject.imageUrl);

    // Vérifie la description
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();

    // Vérifie les techs
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();

    // Vérifie le lien GitHub
    expect(screen.getByText(mockProject.githubUrl)).toHaveAttribute(
      "href",
      mockProject.githubUrl
    );

    // Vérifie le lien retour
    expect(screen.getByRole("link", { name: /return to home/i })).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("handles fetch error gracefully", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
    }) as any;

    render(
      <MemoryRouter initialEntries={["/project/123"]}>
        <Routes>
          <Route path="/project/:id" element={<ProjectComponent />} />
        </Routes>
      </MemoryRouter>
    );

    // Comme rien n'est affiché en cas d'erreur, on vérifie que le titre n'apparaît pas
    await waitFor(() => {
      const heading = screen.getByRole("heading", { level: 2});
      expect(heading).toHaveTextContent("Project not found"); // empty if fetch fails
    });

  });
});
