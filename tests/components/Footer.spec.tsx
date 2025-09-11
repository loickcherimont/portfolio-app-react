import { describe, expect, it } from "vitest";

import Footer from "../../src/components/Footer";
import { render, screen } from "@testing-library/react";


describe("Footer", () => {

    it("should render 2 sentences", async () => {
        // ARRANGE
        render(<Footer />)

        // ACT
        const currentYear = (new Date()).getFullYear()

        // ASSERT
        expect(screen.getByText(`© ${currentYear} Loick Cherimont`)).toBeInTheDocument();
        expect(screen.getByText("All rights reserved.")).toBeInTheDocument();
    });

})
