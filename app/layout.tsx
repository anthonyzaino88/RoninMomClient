import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const siteDescription =
  "Ronin Mom shares honest family experiences and practical ways to homeschool, simplify your home, live more naturally, and become more self-sufficient—without chasing perfection.";

export const metadata: Metadata = {
  metadataBase: new URL("https://roninmom.com"),
  title: {
    default: "Ronin Mom — Raising a capable family",
    template: "%s · Ronin Mom",
  },
  description: siteDescription,
  keywords: [
    "Ronin Mom",
    "homeschooling",
    "intentional family life",
    "low-toxin home",
    "self-sufficient living",
    "practical home skills",
  ],
  authors: [{ name: "Ronin Mom" }],
  alternates: {
    canonical: "https://roninmom.com",
  },
  openGraph: {
    title: "Ronin Mom — Raising a capable family",
    description: siteDescription,
    url: "https://roninmom.com",
    siteName: "Ronin Mom",
    images: [
      {
        url: "/images/brand/roninmom-home-hero.webp",
        width: 1536,
        height: 1024,
        alt: "Illustration of a mother and four children learning, cooking, and making things together around a kitchen table.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronin Mom — Raising a capable family",
    description: siteDescription,
    images: ["/images/brand/roninmom-home-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "p:domain_verify": ["548fc0782a6a69377b64db0069d2a28d"],
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ronin Mom",
  url: "https://roninmom.com",
  description: siteDescription,
  sameAs: [
    "https://www.instagram.com/theroninmom",
    "https://www.pinterest.com/theroninmom",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@roninmom.com",
    contactType: "editorial",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ronin Mom",
  url: "https://roninmom.com",
  description: siteDescription,
  publisher: {
    "@type": "Organization",
    name: "Ronin Mom",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#315744" />
        <meta name="msapplication-TileColor" content="#315744" />
        <meta name="theme-color" content="#fcfaf6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ER6VM479RR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ER6VM479RR');
          `}
        </Script>
      </body>
    </html>
  );
}
