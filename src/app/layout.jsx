import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Los Coihues Trail Guide",
  description: "Your complete guide to discovering the trails and natural wonders of Patagonia",
};
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}