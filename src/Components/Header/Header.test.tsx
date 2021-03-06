import { render } from "@testing-library/react";
import React from "react";
import { Header } from "./Header";

test("App renders correctly", () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
