import './globals.css'

export const metadata = {
  title: 'Daviosoo',
  description: 'Daviosoo portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="py-24">{children}</body>
    </html>
  );
}
