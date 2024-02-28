import { ReactElement, useState } from "react";
import CardBar from "./cardBar/cardBar";

export default function Card({
  date,
  title,
  position,
  cardKey,
}: {
  date: string;
  title: string;
  position: string;
  cardKey: string;
}): ReactElement {
  return (
    <span>
      <h4>{title}</h4>
      <p>{date}</p>
      <CardBar
        title={title}
        date={date}
        currPosition={position}
        cardKey={cardKey}
      />
    </span>
  );
}
