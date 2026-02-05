import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redman Systems | Revenue Growth for Home Service Businesses",
  description:
    "Automated systems that capture leads, book more jobs, and grow revenue for plumbing, HVAC, junk removal, and home service operators. $397/month, everything included.",
  openGraph: {
    title: "Redman Systems | Revenue Growth for Home Service Businesses",
    description:
      "Join 500+ contractors who've doubled their revenue — without working more hours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
