import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata = {
  title: "Bustamante Barrett-Greening — DevOps Engineer",
  description: "Portfolio of Bustamante Barrett-Greening — DevOps Engineer at HM Land Registry, BSc Computer Science student at University of Plymouth. Specialising in Linux, OpenShift, AWS, and web development.",
  keywords: ["DevOps", "OpenShift", "AWS", "Linux", "Next.js", "Portfolio", "Computer Science", "HM Land Registry"],
  authors: [{ name: "Bustamante Barrett-Greening" }],
  openGraph: {
    title: "Bustamante Barrett-Greening — DevOps Engineer",
    description: "DevOps Engineer at HM Land Registry. BSc Computer Science at University of Plymouth. Specialising in Linux, OpenShift, AWS, and web development.",
    url: "https://bustamantebg.uk",
    siteName: "bustamante.bg",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bustamante Barrett-Greening — DevOps Engineer",
    description: "DevOps Engineer at HM Land Registry. BSc Computer Science at University of Plymouth.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
