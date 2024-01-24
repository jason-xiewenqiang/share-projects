import { expect, test } from "vitest";
import { sum } from "../src/index";

test("adds 1 + 2 to be 3", () => {
  expect(sum(1, 2)).toBe(3);
});
