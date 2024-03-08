//it is parent of all pages so it is applied to all pages :)

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { UserProvider } from "@/context/UserContext";
import ReactQueryProvider from '@/provider/react-query'



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Color Memoir | Colorize your History",
  description: "Colorize Nepal's History and Culture using our VGG19 CNN model.",
  authors: [
    {
      name: 'Darpan Kattel',
      url: 'https://github.com/darpankattel',
    },
    {
      name: 'Bishnu Datt Badu',
      url: 'https://github.com/20hnu',
    },
    {
      name: 'Bibek Sunar',
      url: 'https://github.com/vivekpanthii',
    }
  ],
  icons: {
    icon: '/logo/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
        <UserProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </UserProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
