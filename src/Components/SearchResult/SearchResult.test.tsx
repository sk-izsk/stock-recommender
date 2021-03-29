import { render } from "@testing-library/react";
import React from "react";
import { SearchResult } from "./SearchResult";

const mockProps = {
  handleAddedStockList: jest.fn(),
  stockPrice: [
    {
      name: "APPL",
      date: "29-03-21",
      amount: 950,
    },
  ],
  socialMedia: [
    {
      name: "APPL",
      data: [
        {
          date: "29-03-21",
          amount: 70,
        },
      ],
    },
  ],
};

test("App renders correctly", () => {
  const { asFragment } = render(<SearchResult {...mockProps} />);
  expect(asFragment()).toMatchSnapshot();
});
