"use client";

import { ReactElement, useCallback, useEffect, useState } from "react";
import Card from "../card/card";
import { loadFromLocalStorage } from "@/app/lib/helpers";
import styles from "./section.module.css";
import { clsx } from "clsx";

export default function Section({
  title,
  updatePosition,
}: {
  title: string;
  updatePosition: Function;
}): ReactElement {
  const [newCard, setNewCard] = useState<ReactElement[]>([]);

  // Функция обновляет карточки при переносе одной карты в другую секцию
  const reloadCards = useCallback(() => {
    const cards = loadFromLocalStorage(title).map((el, index) => (
      <Card
        key={index + 1}
        date={el.cardDate}
        title={el.cardTitle}
        position={title}
        reloadCards={reloadCards}
      />
    ));
    setNewCard(cards);
    updatePosition(title);
  }, [title, updatePosition]);

  // Загрузка карточек в секцию при рендеренге старницы
  useEffect(() => {
    const cards = loadFromLocalStorage(title).map((el, index) => (
      <Card
        key={index + 1}
        date={el.cardDate}
        title={el.cardTitle}
        position={title}
        reloadCards={reloadCards}
      />
    ));

    setNewCard(cards);
  }, [reloadCards, title]);

  return (
    <div
      className={clsx(styles.workspace__section, {
        [styles.workspace__section_working]: title === "Working",
        [styles.workspace__section_done]: title === "Done",
      })}
    >
      <h3 className={styles.workspace__section_title}>{title}</h3>
      <div>{newCard}</div>
    </div>
  );
}
