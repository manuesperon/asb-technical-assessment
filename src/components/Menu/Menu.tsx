import React, { FC } from "react";
import classNames from "classnames";
import * as styles from "./Menu.module.scss";

interface MenuProps {
  isOpen: boolean;
}

export const Menu: FC<MenuProps> = ({ isOpen }) => {
  return (
    <nav
      aria-label="Menu"
      className={classNames(styles.menu, {
        [styles.menuOpen]: isOpen,
        [styles.menuHidden]: !isOpen,
      })}
      aria-hidden={!isOpen}
    >
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
