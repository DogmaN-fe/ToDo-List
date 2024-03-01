"use client";

import Section from "./ui/section/section";
import styles from "./ui/global.module.css";
import ToDo from "./ui/Todo/todo";
import { ReactElement, useState } from "react";

export default function Home() : ReactElement {
  const [position, setPosition] = useState("");

  // Функция обновление карточек в секциях
  function updatePosition(updatedPosition: string) {
    position !== updatedPosition ? setPosition(updatedPosition) : setPosition(`reload`);
  }

  return (
    <main className={styles.main}>
      <section className={styles.workspace}>
        <div className={styles.workspace_element}>
          <ToDo updatePosition={updatePosition} />
        </div>
        <div className={styles.workspace_element}>
          <Section title={"Working"} updatePosition={updatePosition} />
        </div>
        <div className={styles.workspace_element}>
          <Section title={"Done"} updatePosition={updatePosition} />
        </div>
      </section>
    </main>
  );
}
