import { Outfit } from "next/font/google";
import { Play } from 'next/font/google'
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";



const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })
const play = Play({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata = {
  title: "ComFit - Optics",
  description: "Discover Comfit Optics, a leading optical store in Abuja, Nigeria, offering expert eye care services, quality prescription glasses, contact lenses, and stylish designer frames for all ages.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
         <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`} >
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
      </ClerkProvider>
  );
}
