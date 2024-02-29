"use client"

import Section from "./ui/section/section";
import styles from "./ui/global.module.css";
import ToDo from "./ui/Todo/todo";
import { useState } from "react";

export default function Home() {

  const [cards, setCards] = useState('');

  function updateCards(updatedCards: any) {
    setCards(updatedCards);
    
  }

  return (
    <main className={styles.main}>
      <section className={styles.workspace}>
        <div className={styles.workspace_element}>
          <ToDo updateCards={updateCards} />
        </div>
        <div className={styles.workspace_element}>
          <Section title={"Working"} updateCards={updateCards} />
        </div>
        <div className={styles.workspace_element}>
          <Section title={"Done"} updateCards={updateCards} />
        </div>
      </section>
    </main>
  );
}
