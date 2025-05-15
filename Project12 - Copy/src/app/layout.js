"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/Sidebar";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); 
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  const pagesWithSidebar = ["/homepage", "/notifications" , "/storesvisit" ,"/userProfile" ,"/storeprofile", "/more"]; // Define pages where the sidebar should be shown

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="flex ">
            {/* Only render sidebar after hydration */}
            {isMounted && pagesWithSidebar.includes(pathname) && (
              <>
                <AppSidebar />
                <SidebarTrigger />
              </>
            )}
          </div>

          {/* Main Content */}
          <main className="flex-1">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
