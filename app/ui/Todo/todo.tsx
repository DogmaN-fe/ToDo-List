"use client";

import { ReactElement, useCallback, useEffect, useState } from "react";
import Card from "../card/card";
import { loadFromLocalStorage, saveToLocalStorage } from "@/app/lib/helpers";
import styles from "./todo.module.css";

export default function ToDo({
  updateCards,
}: {
  updateCards: Function;
}): ReactElement {
  const [newCard, setNewCard] = useState<ReactElement[]>([]);

  const reloadCards = useCallback(() => {
    const cards = loadFromLocalStorage("ToDo").map((el, index) => (
      <Card
        key={index + 1}
        date={el.cardDate}
        title={el.cardTitle}
        position="ToDo"
        cardKey={String(index + 1)}
        reloadCards={reloadCards}
      />
    ));
    setNewCard(cards);
    updateCards('Some');
  }, [updateCards]);

  useEffect(() => {
    const cards = loadFromLocalStorage("ToDo").map((el, index) => (
      <Card
        key={index + 1}
        date={el.cardDate}
        title={el.cardTitle}
        position="ToDo"
        cardKey={String(index + 1)}
        reloadCards={reloadCards}
      />
    ));
    setNewCard(cards);
  }, [reloadCards, updateCards]);

  const addToDo = (e: any) => {
    e.preventDefault();
    const title: string = e.target[0].value;
    const date: Date = new Date();
    const cardKey = newCard.length + 1;

    setNewCard([
      ...newCard,
      <Card
        key={cardKey}
        date={date.toLocaleDateString()}
        title={title}
        position="ToDo"
        cardKey={String(cardKey)}
        reloadCards={reloadCards}
      />,
    ]);
    saveToLocalStorage(title, date.toLocaleDateString(), "ToDo");
  };

  return (
    <div className={styles.workspace__section}>
      <h3 className={styles.workspace__section_title}>ToDo</h3>
      <form className={styles.workspace__section_form} action="#" onSubmit={addToDo}>
        <label className={styles.workspace__section_input}>
          <input name="title" type="text" />
        </label>
        <button className={styles.workspace__section_button}>Добавить</button>
      </form>

      <div>{newCard}</div>
    </div>
  );
}
