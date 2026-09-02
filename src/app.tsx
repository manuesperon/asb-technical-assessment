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

// Wire this to a hook that fetches the user from the API
const mockUser = {
  firstName: "John",
  lastName: "Doe",
};

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
        <h2>Welcome {mockUser.firstName}</h2>
        <CardRegistrationForm
          onSubmit={(values) => console.log("submit", values)}
        />
      </main>
    </div>
  );
};
