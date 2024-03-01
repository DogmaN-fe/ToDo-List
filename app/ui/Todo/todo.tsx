"use client";

import { ReactElement, useCallback, useEffect, useState } from "react";
import Card from "../card/card";
import { loadFromLocalStorage, saveToLocalStorage } from "@/app/lib/helpers";
import styles from "./todo.module.css";

export default function ToDo({
  updatePosition,
}: {
  updatePosition: Function;
}): ReactElement {
  const [newCard, setNewCard] = useState<ReactElement[]>([]);

  // Функция обновляет карточки при переносе одной карты в другую секцию
  const reloadCards = useCallback((): void => {
    const cards = loadFromLocalStorage("ToDo").map((el, index) => (
      <Card
        key={index + 1}
        date={el.cardDate}
        title={el.cardTitle}
        position="ToDo"
        reloadCards={reloadCards}
      />
    ));
    setNewCard(cards);
    updatePosition("ToDo");
  }, [updatePosition]);

  // Загрузка карточек в секцию при рендеренге старницы
  useEffect(() => {
    const cards = loadFromLocalStorage("ToDo").map((el, index) => (
      <Card
        key={index + 1}
        date={el.cardDate}
        title={el.cardTitle}
        position="ToDo"
        reloadCards={reloadCards}
      />
    ));
    setNewCard(cards);
  }, [reloadCards, updatePosition]);

  /**
   * Функция добовления карточки
   */
  const addToDo = (e: any): void => {
    e.preventDefault();

    // Определяем данные для карточки
    const title: string = e.target[0].value;
    const date: Date = new Date();
    const cardKey = newCard.length + 1;

    // Изменяем карточки на сайте
    setNewCard([
      ...newCard,
      <Card
        key={cardKey}
        date={date.toLocaleDateString()}
        title={title}
        position="ToDo"
        reloadCards={reloadCards}
      />,
    ]);

    // Сохраняем карточку в LocalStorage
    saveToLocalStorage(title, date.toLocaleDateString(), "ToDo");
  };

  return (
    <div className={styles.workspace__section}>
      <h3 className={styles.workspace__section_title}>ToDo</h3>
      <form
        className={styles.workspace__section_form}
        action="#"
        onSubmit={addToDo}
      >
        <label className={styles.workspace__section_input}>
          <input name="title" type="text" />
        </label>
        <button className={styles.workspace__section_button}>Добавить</button>
      </form>

      <div>{newCard}</div>
    </div>
  );
}
