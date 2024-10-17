import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <html>
      <body>  
      <nav className="bg-gray-800 p-4 flex justify-center space-x-4">
        <Link href="/" className="text-white hover:bg-gray-700 p-2 rounded">Home</Link>
        <Link href="/appetizers" className="text-white hover:bg-gray-700 p-2 rounded">Appetizers</Link>
        <Link href="/entrees" className="text-white hover:bg-gray-700 p-2 rounded">Entrees</Link>
      </nav>
      <main className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {children}
      </main>
      </body>
    </html>
  );
};

export default Layout;
