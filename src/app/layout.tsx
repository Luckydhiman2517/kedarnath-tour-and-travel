import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { site } from "@/lib/site";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kedarnathtourandtravels.in"),
  title: {
    default: `${site.name} — Char Dham Yatra from Haridwar`,
    template: `%s | ${site.name}`,
  },
  description:
    "Char Dham Yatra packages from Haridwar — Yamunotri, Gangotri, Kedarnath and Badrinath with AC transport, verified hotels, pure-veg meals and darshan assistance. Helicopter, group and customised tours available.",
  keywords: [
    "Char Dham Yatra",
    "Kedarnath tour package",
    "Haridwar travel agency",
    "Badrinath Kedarnath package",
    "Do Dham Yatra",
    "Char Dham by helicopter",
    "Uttarakhand tour operator",
  ],
  authors: [{ name: site.owner }],
  openGraph: {
    title: `${site.name} — Char Dham Yatra from Haridwar`,
    description:
      "Yatra packages run by a Haridwar family since 2012. AC vehicles, verified hotels, meals and darshan assistance.",
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: [{ url: "/images/logo.webp", width: 1600, height: 900, alt: site.name }],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/car-icon.svg",
    apple: "/car-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#111c45",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white pb-[52px] sm:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
