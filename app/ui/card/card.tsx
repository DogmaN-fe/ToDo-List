import { ReactElement, useState } from "react";
import CardBar from "./cardBar/cardBar";
import styles from './card.module.css'
import clsx from "clsx";

export default function Card({
  date,
  title,
  position,
  cardKey,
  reloadCards,
}: {
  date: string;
  title: string;
  position: string;
  cardKey: string;
  reloadCards: Function;
}): ReactElement {
  return (
    <span className={styles.card}>
      <h4 className={styles.card_title}>{title}</h4>
      <p className={styles.card_data}>{date}</p>
      <CardBar
        title={title}
        date={date}
        currPosition={position}
        reloadCards={reloadCards}
      />
    </span>
  );
}
