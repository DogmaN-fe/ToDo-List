"use client";

import { ReactElement, useEffect, useState } from "react";
import Card from "../card/card";
import { loadFromLocalStorage, saveToLocalStorage } from "@/app/lib/helpers";

export default function ToDo(): ReactElement {
  const [newCard, setNewCard] = useState<ReactElement[]>([]);

  useEffect(() => {
    const cards = loadFromLocalStorage("ToDo").map((el, index) => (
      <Card
        key={index + 1}
        date={el.cardDate}
        title={el.cardTitle}
        position="ToDo"
        cardKey={String(index + 1)}
      />
    ));

    setNewCard(cards);
  }, []);

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
      />,
    ]);
    saveToLocalStorage(
      title,
      date.toLocaleDateString(),
      String(cardKey),
      "ToDo"
    );
  }

  return (
    <>
      <h3>ToDo</h3>
      <form action="#" onSubmit={addToDo}>
        <label>
          <input name="title" type="text" />
        </label>
        <button>Добавить</button>
      </form>

      <div>{newCard}</div>
    </>
  );
}
