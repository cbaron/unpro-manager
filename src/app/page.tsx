import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://future-days.us"
            target="_blank"
            rel="noopener noreferrer"
          >
            By FutureDays
          </a>
        </div>
      </div>

      <div className={`${styles.center} ${styles["main-text"]}`}>
        UnPro Manager
      </div>

      <div className={styles.grid}>
        <Link
          href="/members"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Members <span>-&gt;</span>
          </h2>
          <p>Take care of folx</p>
        </Link>

        <Link
          href="/events"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Events <span>-&gt;</span>
          </h2>
          <p>Better be fun</p>
        </Link>

        <Link
          href="/notify"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Notify <span>-&gt;</span>
          </h2>
          <p>Let it out</p>
        </Link>

        <Link
          href="/settings"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Settings <span>-&gt;</span>
          </h2>
          <p>Take care of you</p>
        </Link>
      </div>
    </main>
  );
}
