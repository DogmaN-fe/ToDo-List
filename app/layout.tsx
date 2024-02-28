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
      <body>{children}</body>
    </html>
  );
}
