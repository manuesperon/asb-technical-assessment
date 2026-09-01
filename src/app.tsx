import React, { FC } from "react";
import * as styles from "./app.module.scss";
import { Header } from "./components/Header/Header";
import { CardRegistrationForm } from "./components/CardRegistrationForm/CardRegistrationForm";
import { Menu } from "./components/Menu/Menu";

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Menu />
      <main>
        <CardRegistrationForm />
      </main>
    </div>
  );
};
