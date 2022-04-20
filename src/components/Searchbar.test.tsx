import { render, fireEvent } from "@testing-library/react";
import { createStore } from "lib";
import { Provider } from "react-redux";
import Searchbar from "./Searchbar";

describe("Testing render Searchbar components", () => {
  it("should render component properly", () => {
    const { getByTestId } = render(
      <Provider store={createStore()}>
        <Searchbar handleSearch={() => null} />
      </Provider>
    );
    expect(getByTestId("search-bar")).toBeTruthy();
  });

  it("input value should be changed", () => {
    const { getByTestId } = render(
      <Provider store={createStore()}>
        <Searchbar handleSearch={() => null} />
      </Provider>
    );

    const input = getByTestId("input");

    fireEvent.change(input, { target: { value: "test" } });
    expect((input as HTMLInputElement).value).toBe("test");
  });
});
