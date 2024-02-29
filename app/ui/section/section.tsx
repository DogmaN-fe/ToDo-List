"use client";

import { ReactElement, useCallback, useEffect, useState } from "react";
import Card from "../card/card";
import { loadFromLocalStorage } from "@/app/lib/helpers";
import styles from "./section.module.css";
import {firaSans} from '../../ui/fonts'
import { clsx } from "clsx";

export default function Section({
  title,
  updateCards,
}: {
  title: string;
  updateCards: Function;
}): ReactElement {
  const [newCard, setNewCard] = useState<ReactElement[]>([]);

  const reloadCards = useCallback(() => {
    const cards = loadFromLocalStorage(title).map((el, index) => (
      <Card
        key={index + 1}
        date={el.cardDate}
        title={el.cardTitle}
        position={title}
        cardKey={String(index + 1)}
        reloadCards={reloadCards}
      />
    ));
    setNewCard(cards);
    updateCards(title);
  }, [title, updateCards]);

  useEffect(() => {
    const cards = loadFromLocalStorage(title).map((el, index) => (
      <Card
        key={index + 1}
        date={el.cardDate}
        title={el.cardTitle}
        position={title}
        cardKey={String(index + 1)}
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
