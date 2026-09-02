import React, { FC, useState } from "react";
import * as styles from "./app.module.scss";
import { Header } from "./components/Header/Header";
import { CardRegistrationForm } from "./components/CardRegistrationForm/CardRegistrationForm";
import { Menu } from "./components/Menu/Menu";

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
      <Menu isOpen={isMenuOpen} />
      <main aria-hidden={isMenuOpen}>
        <CardRegistrationForm />
      </main>
    </div>
  );
};
