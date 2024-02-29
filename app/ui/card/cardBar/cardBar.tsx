import { ReactElement, useState } from "react";
import styles from "./cardBar.module.css";
import clsx from "clsx";
import { removeFromLocalStorage, saveToLocalStorage } from "@/app/lib/helpers";

export default function CardBar({
  title,
  date,
  currPosition,
  reloadCards,
}: {
  title: string;
  date: string;
  currPosition: string;
  reloadCards: Function;
}): ReactElement {
  const [position, setPosition] = useState(currPosition);

  const changePosition = (e: any) => {
    e.preventDefault();
    const newPosition = e.target.innerText;
    console.log(newPosition);

    setPosition(newPosition);
    removeFromLocalStorage(currPosition, title);

    saveToLocalStorage(title, date, newPosition);

    reloadCards();
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
}
