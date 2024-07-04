import { ReactElement, useState } from "react";
import styles from "./cardBar.module.css";
import clsx from "clsx";
import { removeFromLocalStorage, saveToLocalStorage } from "@/app/lib/helpers";

const CardBar = ({
  title,
  date,
  currPosition,
  reloadCards,
}: {
  title: string;
  date: string;
  currPosition: string;
  reloadCards: Function;
}): ReactElement => {
  const [position, setPosition] = useState<string>(currPosition);

  // Функция смены секции картчоки
  const changePosition = (e: any) => {
    e.preventDefault();
    const newPosition = e.target.innerText;

    removeFromLocalStorage(currPosition, title);
    saveToLocalStorage(title, date, newPosition);

    setPosition(newPosition);
    reloadCards();

    setPosition(currPosition);
  };

  return (
    <span className={styles.card__cnahge_position}>
      <button
        className={clsx(styles.move_to, {
          [styles.move_to_active]: position === "ToDo",
        })}
        onClick={changePosition}
      >
        ToDo
      </button>
      <button
        className={clsx(styles.move_to, {
          [styles.move_to_active]: position === "Working",
        })}
        onClick={changePosition}
      >
        Working
      </button>
      <button
        className={clsx(styles.move_to, {
          [styles.move_to_active]: position === "Done",
        })}
        onClick={changePosition}
      >
        Done
      </button>
    </span>
  );
};

export default CardBar;
