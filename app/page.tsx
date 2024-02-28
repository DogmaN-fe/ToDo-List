import ToDo from "./ui/Todo/todo";
import Done from "./ui/done/done";
import styles from "./ui/global.module.css";
import Working from "./ui/working/working";

export default function Home() {
  return (
    <main>
      <section className={styles.workspace}>
        <div className={styles.workspace__section}>
          <ToDo />
        </div>
        <div className={styles.workspace__section}>
          <Working />
        </div>
        <div className={styles.workspace__section}>
          <Done />
        </div>
      </section>
    </main>
  );
}
