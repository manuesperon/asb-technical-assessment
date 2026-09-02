import React, { FC, useState } from "react";
import * as styles from "./app.module.scss";
import { Header } from "./components/Header/Header";
import { CardRegistrationForm } from "./components/CardRegistrationForm/CardRegistrationForm";
import { Menu, MenuItem } from "./components/Menu/Menu";

const menuItems: MenuItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export const App: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.app}>
      <Header
        title={isMenuOpen ? "Menu" : "Register card form"}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
      />
      <Menu isOpen={isMenuOpen} items={menuItems} />
      <main aria-hidden={isMenuOpen}>
        <CardRegistrationForm />
      </main>
    </div>
  );
};
