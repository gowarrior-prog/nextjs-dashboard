import { Inter, Lusitana } from 'next/font/google';

// Inter font heading aur normal text ke liye
export const inter = Inter({ subsets: ['latin'] });

// Lusitana font active numerical dashboards ke liye
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
