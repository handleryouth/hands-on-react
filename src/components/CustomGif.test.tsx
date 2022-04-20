import { render } from "@testing-library/react";
import Gif from "./CustomGif";

describe("Testing render Gif components", () => {
  it("should render Gif component", () => {
    const { getByTestId } = render(
      <Gif
        title="google"
        url="https://images.unsplash.com/photo-1650179743769-89e0cc27c21c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    );

    expect(getByTestId("Gif")).toBeTruthy();
  });
});
