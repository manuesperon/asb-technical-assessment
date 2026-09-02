import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Menu, MenuItem } from "./Menu";

const items: MenuItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

describe("Menu", () => {
  it("renders a link for each item", () => {
    render(<Menu isOpen={true} items={items} />);

    items.forEach(({ label, href }) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("renders no items when the list is empty", () => {
    render(<Menu isOpen={true} items={[]} />);

    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("is hidden from assistive tech when closed", () => {
    render(<Menu isOpen={false} items={items} />);

    expect(screen.getByRole("navigation", { hidden: true })).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("is exposed to assistive tech when open", () => {
    render(<Menu isOpen={true} items={items} />);

    expect(screen.getByRole("navigation", { name: "Menu" })).toHaveAttribute(
      "aria-hidden",
      "false",
    );
  });

  it("applies the closed (off-canvas) style when isOpen is false", () => {
    render(<Menu isOpen={false} items={items} />);
    const nav = screen.getByRole("navigation", { hidden: true });

    expect(nav).toHaveClass("menuHidden");
    expect(nav).not.toHaveClass("menuOpen");
  });

  it("applies the open (on-canvas) style when isOpen is true", () => {
    render(<Menu isOpen={true} items={items} />);
    const nav = screen.getByRole("navigation");

    expect(nav).toHaveClass("menuOpen");
    expect(nav).not.toHaveClass("menuHidden");
  });
});
