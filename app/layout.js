import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Civight",
  description: "Protecting the civil rights of citizens...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Grotesk.className}>{children}</body>
    </html>
  );
}
