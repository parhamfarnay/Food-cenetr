import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">Food-center</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a
          href="https://github.com/parhamfarnay/Food-cenetr"
          target="_blank"
          rel="noreferrer"
        >
          ParhamFarnay
        </a>{" "}
        This is my projects link
      </footer>
    </>
  );
}

export default Layout;
