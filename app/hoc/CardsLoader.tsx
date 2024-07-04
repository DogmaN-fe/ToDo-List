"use client";

import React, { ReactElement, useState } from "react";
import ToDo from "../ui/Todo/todo";
import Section from "../ui/section/section";

import styles from "@/app/global.module.css";

const CardsLoader = (): ReactElement => {
  const [position, setPosition] = useState<string>("");

  // Функция обновление карточек в секциях
  function updatePosition(updatedPosition: string) {
    position !== updatedPosition
      ? setPosition(updatedPosition)
      : setPosition(`reload`);
  }
  return (
    <section className={styles.workspace}>
      <div className={styles.workspace_element}>
        <ToDo updatePosition={updatePosition} />
      </div>
      <div className={styles.workspace_element}>
        <Section title={"Working"} updatePosition={updatePosition} />
      </div>
      <div className={styles.workspace_element}>
        <Section title={"Done"} updatePosition={updatePosition} />
      </div>
    </section>
  );
};

export default CardsLoader;
