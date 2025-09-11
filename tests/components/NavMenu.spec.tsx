import { render, screen, fireEvent, within } from "@testing-library/react";
import NavMenu from "../../src/components/NavMenu";
import { describe, expect, it } from "vitest";

describe("NavMenu", () => {
  const menuItems = ["Projects", "Contact", "About"];

  it("renders desktop menu items", () => {
    render(<NavMenu menuItems={menuItems} />);
    // Sur desktop, le menu doit être visible
    menuItems.forEach((item) => {
      expect(screen.getByText(item.toUpperCase())).toBeInTheDocument();
    });
  });

  it("toggles mobile menu when hamburger is clicked", () => {
    render(<NavMenu menuItems={menuItems} />);

    // Le menu mobile n'est pas visible au départ
    expect(screen.queryByTestId("mobile-menu")).toBeNull();

    // Clique sur le hamburger
    const button = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(button);

    // Le menu mobile apparaît
    const mobileMenu = screen.getByTestId("mobile-menu");
    menuItems.forEach((item) => {
      expect(within(mobileMenu).getByText(item.toUpperCase())).toBeInTheDocument();
    });

    // Clique à nouveau => fermeture
    fireEvent.click(button);
    expect(screen.queryByTestId("mobile-menu")).toBeNull();
  });

  it("closes mobile menu when a link is clicked", () => {
    render(<NavMenu menuItems={menuItems} />);

    // Ouvrir menu mobile
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(toggleButton);

    const mobileMenu = screen.getByTestId("mobile-menu");

    // Clique sur le premier lien
    fireEvent.click(within(mobileMenu).getByText("PROJECTS"));

    // Après clic, le menu doit être fermé
    expect(screen.queryByTestId("mobile-menu")).toBeNull();
  });
});
