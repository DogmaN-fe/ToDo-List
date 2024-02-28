"use client";

import { ICardByLocalStorage } from "./types";

/**
 *
 * @param cardTitle Титульник карточки
 * @param cardDate Дата создания карточки
 * @param cardKey Ключ карты
 * @param position Поззиция карты(ToDo, Working, Done)
 */
export const saveToLocalStorage = (
  cardTitle: string,
  cardDate: string,
  cardKey: string,
  position: string
): void => {
  const card: ICardByLocalStorage = {
    cardTitle: cardTitle,
    cardDate: cardDate,
    cardKey: cardKey,
  };
  const key: string = `card-${position}-${cardKey}`;
  localStorage.setItem(`cardCount-${position}`, cardKey);
  localStorage.setItem(key, JSON.stringify(card));
};

export const loadFromLocalStorage = (
  position: string
): ICardByLocalStorage[] => {
  let cards: ICardByLocalStorage[] = [];
  let str: string = localStorage.getItem(`cardCount-${position}`) || "0";

  const countCard: number = Number(str);

  for (let index = 0; index < countCard; index++) {
    let str: string =
      localStorage.getItem(`card-${position}-${index + 1}`) || "";
    if (str !== "") {
      let parseJSON = JSON.parse(str);

      cards.push(parseJSON);
    }
  }

  return cards;
};

export const removeFromLocalStorage = (
  position: string,
  cardKey: string
): void => {
  localStorage.removeItem(`card-${position}-${cardKey}`);
};
