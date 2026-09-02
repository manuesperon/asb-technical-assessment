import React from "react";
import * as styles from "./Header.module.scss";
import MenuIcon from "../../../assets/icons/menu.svg";
import ArrowLeftIcon from "../../../assets/icons/arrow-left.svg";
interface HeaderProps {
  title: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export const Header = ({ title, isMenuOpen, onToggleMenu }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <button
        className={styles.iconButton}
        onClick={onToggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Go back" : "Open menu"}
      >
        {isMenuOpen ? <ArrowLeftIcon /> : <MenuIcon />}
      </button>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};
