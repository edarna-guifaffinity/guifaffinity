import { render, screen } from "@testing-library/react";
import { Tag } from "./Tag";

test("se muestra un gif", () => {
  const tagNameStr:string = "banana"
  render(<Tag tagName = {tagNameStr}/>);
  expect(
    screen.getByText("#banana")
  ).toBeVisible();
});
