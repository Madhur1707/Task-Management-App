import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Task Management App</title>
      </head>
      <body>{children}
      <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
