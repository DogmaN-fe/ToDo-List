"use client";

import { ICardByLocalStorage } from "./types";

/**
 * Функция сохранения карточки в LocalStorage
 * @param cardTitle Название карточки
 * @param cardDate Дата создания
 * @param position Секция нахождения карточки
 */
export const saveToLocalStorage = (
  cardTitle: string,
  cardDate: string,
  position: string
): void => {
  if (cardTitle === "") {
    return;
  }

  // Загружаем массив карточек для добавления в него новой
  const cards = loadFromLocalStorage(position);

  // Созданеи новой карточки
  const card: ICardByLocalStorage = {
    cardTitle: cardTitle,
    cardDate: cardDate,
    cardKey: String(cards.length + 1),
  };

  // Добавлеие в массив
  cards.push(card);

  // Сохранение массива с новой карточкой в LocalStorage
  localStorage.setItem(`${position}-cards`, JSON.stringify(cards));
};

/**
 * Функция загрузки карточек из LocalStorage
 * @param position Секция в которую отправляются карточки
 * @returns Массив карточек из LocalStorage
 */
export const loadFromLocalStorage = (
  position: string
): ICardByLocalStorage[] => {
  // Объявление массива карточек
  let cards: ICardByLocalStorage[] = [];

  // Загрузка из LocalStorage карточек секции
  let str: string = localStorage.getItem(`${position}-cards`) || "";

  // Проверка что карточки есть в LocalStorage
  if (str !== "") {
    cards = JSON.parse(str);
  }

  return cards;
};

/**
 * Функция удаления карточки из секции
 * @param position Секция, где находится карточка
 * @param cardTitle Название карточки
 */
export const removeFromLocalStorage = (
  position: string,
  cardTitle: string
): void => {
  // Массив карточек из LocalStorage
  let cards: ICardByLocalStorage[] = [];

  // Загрузка из LocalStorage карточек секции
  let str: string = localStorage.getItem(`${position}-cards`) || "";

  // Проверка что карточки есть в LocalStorage
  if (str === "") {
    return;
  }

  // Парсинг в массив объектов
  cards = JSON.parse(str);

  // Удаление полученой карты из массива
  cards = cards.filter((item) => item.cardTitle !== cardTitle);

  // Переназначение ключей карт
  cards.forEach((el, index) => {
    el.cardKey = String(index + 1);
  });

  // Сохранение нового масива карт без удаленной
  localStorage.setItem(`${position}-cards`, JSON.stringify(cards));
};
