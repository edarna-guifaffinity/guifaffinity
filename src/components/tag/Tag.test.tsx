import { render, screen } from "@testing-library/react";
import { Tag } from "./Tag";

test("se muestra un gif", () => {
  render(<Tag />);
  expect(
    screen.getByText("#banana")
  ).toBeVisible();
});