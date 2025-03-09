import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Header</h1>
      </div>
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
