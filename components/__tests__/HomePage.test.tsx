import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../../app/page";
import { MockedProvider } from "@apollo/client/testing";
import { GET_COUNTRY } from "../../graphQl/queries/getCountry";
jest.mock("mapbox-gl");

const mocks = [
  {
    request: {
      query: GET_COUNTRY,
      variables: { code: "US" },
    },
    result: {
      data: {
        country: {
          name: "United States",
          continent: {
            name: "North America",
          },
          emoji: "🇺🇸",
          capital: "Washington D.C.",
          languages: [
            {
              name: "English",
            },
          ],
          currency: "USD,USN,USS",
          code: "US",
        },
      },
    },
  },
];

describe("MapWithSearch Component", () => {
  it("Render the main page", () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    expect(screen.getByText("Country Map")).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: /searchCriteria/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("selectedOption")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Find Country/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Find Country/i })).toHaveClass(
      "pointer-events-none"
    );
  });
});
