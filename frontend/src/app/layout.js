import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/Contexts/ContextProvider";
import ToastProvider from "@/Providers/ToastProvider";
import AuthProvider from "@/Providers/AuthProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hostell",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <ContextProvider>
            <AuthProvider>{children}</AuthProvider>
          </ContextProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
