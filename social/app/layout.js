// app/layout.js
import "./../styles/globals.css";

export const metadata = {
  title: "Garnica | Frontend Developer",
  description: "Frontend Developer Portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}