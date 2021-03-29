import { render } from "@testing-library/react";
import React from "react";
import { InputField } from "./InputField";

const mockProps = {
  stockPriceValue: "Mock Value",
  socialMediaCountValue: "Mock Counter",
  stockPriceHandler: jest.fn(),
  socialMediaCountHandler: jest.fn(),
};

test("App renders correctly", () => {
  const { asFragment } = render(<InputField {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
