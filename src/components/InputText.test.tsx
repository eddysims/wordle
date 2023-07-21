import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { InputText } from "./InputText";

it("calls the onChange with the correct value", async () => {
  const changeHandler = jest.fn();
  render(<InputText onChange={changeHandler} />);

  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "foo" },
  });

  await waitFor(() => {
    expect(changeHandler).toHaveBeenCalledWith("foo");
  });
});

it("adds the min and max length attrs", () => {
  render(<InputText minLength={5} maxLength={5} onChange={jest.fn} />);
  expect(screen.getByRole("textbox")).toHaveAttribute("minLength", "5");
  expect(screen.getByRole("textbox")).toHaveAttribute("maxLength", "5");
});
