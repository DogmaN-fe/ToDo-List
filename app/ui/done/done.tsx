"use client";

import { ReactElement, useEffect, useState } from "react";
import Card from "../card/card";
import { loadFromLocalStorage } from "@/app/lib/helpers";

export default function Done(): ReactElement {
  const [newCard, setNewCard] = useState<ReactElement[]>([]);

  useEffect(() => {
    const cards = loadFromLocalStorage("Done").map((el, index) => (
      <Card
        key={index + 1}
        date={el.cardDate}
        title={el.cardTitle}
        position="Done"
        cardKey={String(index + 1)}
      />
    ));

    setNewCard(cards);
  }, []);

  return (
    <>
      <h3>Done</h3>
      <div>{newCard}</div>
    </>
  );
}
