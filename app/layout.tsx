import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gigz App",
  description: "Track your live music journey with Gigz! Add concerts, discover set-lists, and save photos of your favourite shows. Build your personal concert diary - free to try today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-montserrat antialiased">
        {children}
      </body>
    </html>
  );
}
