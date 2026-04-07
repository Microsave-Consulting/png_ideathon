import "./globals.css";

export const metadata = {
  title: "PNG National Digital ID Ideathon",
  description: "Driving Digital Inclusion Through SevisPass",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
