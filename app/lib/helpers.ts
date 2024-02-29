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
  position: string
): void => {
  const cards = loadFromLocalStorage(position);
  
  const card: ICardByLocalStorage = {
    cardTitle: cardTitle,
    cardDate: cardDate,
    cardKey: String(cards.length + 1),
  };

  cards.push(card);

  localStorage.setItem(`${position}-cards`, JSON.stringify(cards));
};

export const loadFromLocalStorage = (
  position: string
): ICardByLocalStorage[] => {
  let cards: ICardByLocalStorage[] = [];

  let str: string = localStorage.getItem(`${position}-cards`) || "";

  if (str !== "") {
    cards = JSON.parse(str);
  }

  return cards;
};

export const removeFromLocalStorage = (
  position: string,
  cardTitle: string
): void => {
  let cards: ICardByLocalStorage[] = [];

  let str: string = localStorage.getItem(`${position}-cards`) || "";

  if (str !== "") {
    cards = JSON.parse(str);
  }

  cards = cards.filter((item) => item.cardTitle !== cardTitle);

  cards.forEach((el, index) => {
    el.cardKey = String(index + 1);
  });

  localStorage.setItem(`${position}-cards`, JSON.stringify(cards));
};
