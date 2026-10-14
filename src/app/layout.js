import { Geist, Geist_Mono } from "next/font/google";
import { personal } from "@/data/portfolio";
import "./globals.css";

// Load the Geist font. next/font downloads it at build time,
// so the browser doesn't wait for Google and the text doesn't "jump".
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO: what browsers, Google and LinkedIn show for my site
export const metadata = {
  metadataBase: new URL(personal.siteUrl),
  title: `${personal.name} | ${personal.title}`,
  description: `Portfolio of ${personal.name}, a ${personal.title} from ${personal.location}. ${personal.intro}`,
  openGraph: {
    title: `${personal.name} | ${personal.title}`,
    description: personal.intro,
    url: "/",
    siteName: personal.name,
    type: "website",
  },
};

// Wraps every page. {children} = the page content (page.js)
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-950 font-sans text-slate-100">
        {children}
      </body>
    </html>
  );
}
