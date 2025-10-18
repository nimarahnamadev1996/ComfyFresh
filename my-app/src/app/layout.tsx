import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "react-hot-toast";


import "./globals.css";
import CustomLayout from "@/layout-provider";



export const metadata: Metadata = {
  title: "ComfyFresh",
  description: "ComfyFresh brings you fresh, natural, and organic products directly from local sellers — shop healthy, live fresh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <CustomLayout>{children}</CustomLayout>
          <Toaster position='top-center' reverseOrder={false} />
        </body>
      </html>
    </ClerkProvider>
  );
}
