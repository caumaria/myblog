"use client";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Food & Health Blog</title>        
        <link rel="icon" type="image/x-icon" href="/icon32.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
