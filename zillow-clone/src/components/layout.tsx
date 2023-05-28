import '../styles/globals.css';
import { Inter } from 'next/font/google'
import Header from './header';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className={`flex-grow ${inter.className}`}>{children}</main>
      <Footer />
    </div>
  )
}
