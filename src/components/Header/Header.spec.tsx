import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

jest.mock("../../../assets/icons/menu.svg", () => ({
  __esModule: true,
  default: () => <svg data-testid="menu-icon" />,
}));

jest.mock("../../../assets/icons/arrow-left.svg", () => ({
  __esModule: true,
  default: () => <svg data-testid="arrow-left-icon" />,
}));

describe("Header", () => {
  it("renders the given title", () => {
    render(
      <Header
        title="Register card form"
        isMenuOpen={false}
        onToggleMenu={() => {}}
      />,
    );
    expect(
      screen.getByRole("heading", { level: 1, name: "Register card form" }),
    ).toBeInTheDocument();
  });

  it("shows the menu icon when the menu is closed", () => {
    render(
      <Header
        title="Register card form"
        isMenuOpen={false}
        onToggleMenu={() => {}}
      />,
    );
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("arrow-left-icon")).not.toBeInTheDocument();
  });

  it("shows the back arrow icon when the menu is open", () => {
    render(<Header title="Menu" isMenuOpen={true} onToggleMenu={() => {}} />);
    expect(screen.getByTestId("arrow-left-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("menu-icon")).not.toBeInTheDocument();
  });

  it("shows 'Open menu' label and collapsed state when menu is closed", () => {
    render(
      <Header
        title="Register card form"
        isMenuOpen={false}
        onToggleMenu={() => {}}
      />,
    );
    const button = screen.getByRole("button", { name: "Open menu" });
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("shows 'Go back' label and expanded state when menu is open", () => {
    render(<Header title="Menu" isMenuOpen={true} onToggleMenu={() => {}} />);
    const button = screen.getByRole("button", { name: "Go back" });
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("calls onToggleMenu when the icon button is clicked", () => {
    const onToggleMenu = jest.fn();
    render(
      <Header
        title="Register card form"
        isMenuOpen={false}
        onToggleMenu={onToggleMenu}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(onToggleMenu).toHaveBeenCalledTimes(1);
  });
});
