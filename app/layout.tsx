import { Metadata } from 'next'; // Import laazmi karein
import './globals.css';

// Yeh object automatic poori website par apply ho jayega
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard', // %s ki jagah child page ka naam khud aa jayega
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
