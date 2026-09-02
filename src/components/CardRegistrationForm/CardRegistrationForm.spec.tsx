import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardRegistrationForm } from "./CardRegistrationForm";

describe("CardRegistrationForm", () => {
  it("renders all expected fields", () => {
    render(<CardRegistrationForm onSubmit={() => {}} />);
    expect(screen.getByLabelText("Credit card number")).toBeInTheDocument();
    expect(screen.getByLabelText("CVC")).toBeInTheDocument();
    expect(screen.getByLabelText("Expiry")).toBeInTheDocument();
  });

  it("updates field values as the user types", () => {
    render(<CardRegistrationForm onSubmit={() => {}} />);
    const cardNumberInput = screen.getByLabelText(
      "Credit card number",
    ) as HTMLInputElement;

    fireEvent.change(cardNumberInput, {
      target: { value: "4111111111111111" },
    });
    expect(cardNumberInput.value).toBe("4111111111111111");
  });

  it("calls onSubmit with the current field values when submitted", () => {
    const onSubmit = jest.fn();
    render(<CardRegistrationForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText("Credit card number"), {
      target: { value: "4111111111111111" },
    });
    fireEvent.change(screen.getByLabelText("CVC"), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ cardNumber: "4111111111111111", cvc: "123" }),
    );
  });
});
