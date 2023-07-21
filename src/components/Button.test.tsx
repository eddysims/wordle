import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { click } from "@testing-library/user-event/dist/click";

describe("it renders the right type of button", () => {
  it("renders a default button", () => {
    render(<Button label="test" />);

    expect(screen.getByText("test")).toHaveAttribute("type", "button");
  });

  it("can render other types of buttons", () => {
    render(<Button label="test" type="submit" />);

    expect(screen.getByText("test")).toHaveAttribute("type", "submit");
  });
});

describe("it adds the right classes for sizes", () => {
  it("adds base size classes", () => {
    render(<Button label="test" />);

    expect(screen.getByText("test").classList).toContain("h-12");
  });

  it("adds small size classes", () => {
    render(<Button label="test" size="small" />);

    expect(screen.getByText("test").classList).toContain("h-8");
  });
});

it("can be disabled", () => {
  render(<Button label="test" disabled />);

  expect(screen.getByText("test")).toBeDisabled();
});

it("calls the onClick callback when clicked", () => {
  const clickHandler = jest.fn();
  render(<Button label="test" onClick={clickHandler} />);

  const button = screen.getByText("test");

  fireEvent.click(button);

  expect(clickHandler).toHaveBeenCalled();
});
