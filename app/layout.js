import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata = {
  title: "Bustamante Barrett-Greening",
  description: "Portfolio of Bustamante Barrett-Greening — Computer Scientist & Software Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
