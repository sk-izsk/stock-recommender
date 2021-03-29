import { render } from "@testing-library/react";
import React from "react";
import { Table } from "./Table";

const mockProps = {
  handleSellStock: jest.fn(),
  stockPrice: [
    {
      name: "APPL",
      date: "29-03-21",
      amount: 950,
    },
  ],
};

test("App renders correctly", () => {
  const { asFragment } = render(<Table {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
