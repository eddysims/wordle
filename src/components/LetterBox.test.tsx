import { render, screen } from "@testing-library/react";
import { LetterBox } from "./LetterBox";

it("renders empty without a letter", () => {
  render(<LetterBox />);

  expect(screen.getByTestId("letter-box")).toBeEmptyDOMElement();
});

it("renders the letter", () => {
  render(<LetterBox letter="a" />);

  expect(screen.getByText("a")).toBeInTheDocument();
});

describe("it adds the colors for statuses", () => {
  it("adds the unused status colors", () => {
    render(<LetterBox status="unused" />);
    expect(screen.getByTestId("letter-box").classList).toContain("bg-white");
  });

  it("adds the used status colors", () => {
    render(<LetterBox status="used" />);
    expect(screen.getByTestId("letter-box").classList).toContain(
      "bg-yellow-100"
    );
  });

  it("adds the correct status colors", () => {
    render(<LetterBox status="correct" />);
    expect(screen.getByTestId("letter-box").classList).toContain(
      "bg-green-100"
    );
  });
});
