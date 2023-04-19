import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";


test("render without crashing", () => {
  render(<App />);
  const lastSearch = screen.getByText("Last search");
  expect(lastSearch).toBeInTheDocument();
});

test("search form is working", async () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: "search-button" });
  
  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.click(button);

  const title = await screen.findByText("Matrix");
  expect(title).toBeInTheDocument();
});
