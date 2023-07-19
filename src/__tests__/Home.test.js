import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { name, city } from "../data/data";
import Home from "../components/Home";

test("the h1 has an inline style attribute with a color of 'firebrick'", () => {
  render(<Home />);

  const h1 = screen.queryByText(`${name} is a Web Developer from ${city}`);
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveStyle("color: firebrick");
});
