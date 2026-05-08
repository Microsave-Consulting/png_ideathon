import "./globals.css";

export const metadata = {
  title: "PNG National Digital ID Ideathon",
  description: "Driving Digital Inclusion Through SevisPass",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Reload on bfcache restore so React synthetic events stay intact */}
        <script dangerouslySetInnerHTML={{ __html: `window.addEventListener('pageshow',function(e){if(e.persisted)window.location.reload();});` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
