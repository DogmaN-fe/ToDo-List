import "./reset.css";
import { firaSans } from "./lib/fonts";
import styles from "./global.module.css";
import React, { ReactElement } from "react";

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  return (
    <html lang="ru">
      <head>
        <title>ToDo List</title>
      </head>
      <body className={`${firaSans.className} ${styles.body}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
