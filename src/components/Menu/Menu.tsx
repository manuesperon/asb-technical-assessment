import React, { FC } from "react";
import classNames from "classnames";
import * as styles from "./Menu.module.scss";

export interface MenuItem {
  label: string;
  href: string;
}

interface MenuProps {
  isOpen: boolean;
  items: MenuItem[];
}

export const Menu: FC<MenuProps> = ({ isOpen, items }) => {
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
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
