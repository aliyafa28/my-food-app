// app/layout.tsx
import './globals.css';
import Navbar from './components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

