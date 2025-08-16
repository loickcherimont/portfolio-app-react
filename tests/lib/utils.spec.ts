import { expect, it } from "vitest";
import { getCurrentYear } from "../../src/lib/utils";

it("should render current year", async () => {
    const actual = getCurrentYear();
    const expected = (new Date()).getFullYear();
    expect(actual).toEqual(expected);
});