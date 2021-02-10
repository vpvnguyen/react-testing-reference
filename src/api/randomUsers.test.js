import { render, screen } from "@testing-library/react";
import { getRandomUser } from "./randomUser.api";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
