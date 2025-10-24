import styles from "./Header.module.css";

export interface HeaderProps {
  text?: string;
  onClick?: () => void;
}

export const Header = ({ text, onClick }: HeaderProps) => (
  <header>
    <div className={styles.wrapper}>
      <div>
        <img
          className={styles.logo}
          src="https://new.bitovi.com/logos/bitovi-logo-red-1.svg"
          onClick={onClick}
        />
      </div>
      <h1 className={styles.logo}>{text}, World!!!!</h1>
    </div>
  </header>
);
