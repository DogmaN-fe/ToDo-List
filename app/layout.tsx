import '@/app/ui/reset.css';
import {firaSans} from './ui/fonts'
import styles from "./ui/global.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <title>ToDo List</title>

      </head>
      <body className={`${firaSans.className} ${styles.body}`}>{children}</body>
    </html>
  );
}
