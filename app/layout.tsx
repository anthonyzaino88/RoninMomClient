import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://roninmom.com"),
  title: "The Ronin Mom - Empowering Self-Sufficient Living",
  description: "Ronin Mom empowers self-sufficient living with holistic wellness and sustainability tips. Join us for practical, eco-friendly insights.",
  keywords: ["Ronin Mom", "self-sufficient living", "holistic lifestyle", "sustainable living", "independence", "well-being"],
  authors: [{ name: "Ronin Mom" }],
  alternates: {
    canonical: "https://roninmom.com",
  },
  openGraph: {
    title: "Ronin Mom - Self-Sufficient & Sustainable Living",
    description: "Ronin Mom is your go-to resource for sustainability, holistic wellness, and independent living. Learn how to embrace a self-sufficient lifestyle today!",
    url: "https://roninmom.com",
    siteName: "Ronin Mom",
    images: [
      {
        url: "/assets/img/banner.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronin Mom - Self-Sufficient & Sustainable Living",
    description: "Ronin Mom is your go-to resource for sustainability, holistic wellness, and independent living.",
    images: ["/assets/img/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      'p:domain_verify': ['548fc0782a6a69377b64db0069d2a28d'],
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ronin Mom",
  "url": "https://roninmom.com",
  "logo": "https://roninmom.com/assets/img/banner.png",
  "description": "Ronin Mom empowers individuals through self-sufficient, holistic, and sustainable living practices. Join our community to master life with sustainability and wellness.",
  "sameAs": [
    "https://www.instagram.com/theroninmom",
    "https://www.pinterest.com/theroninmom"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@roninmom.com",
    "contactType": "Customer Support"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Ronin Mom?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ronin Mom is a platform focused on self-sufficient, sustainable, and holistic living. We provide insights, guides, and resources to help individuals live independently."
      }
    },
    {
      "@type": "Question",
      "name": "How can I live sustainably?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Living sustainably means reducing waste, using eco-friendly products, and adopting self-sufficient habits. Ronin Mom offers practical guides to help you make the switch."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hji1dmf.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body style={{ width: '100%', overflowX: 'hidden' }}>
        <Navbar />
        <main style={{ width: '100%', overflowX: 'hidden' }}>
          {children}
        </main>
        <Footer />
        
        {/* Google Analytics */}
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
