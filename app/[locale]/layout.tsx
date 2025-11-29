import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import MainProvider from "../provider/MainProvider";
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server'
import { routing } from "@/i18n/routing";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages();

  const title = messages["seo.title"] || "Serhii Kaminskyi – My Portfolio";
  const description = messages["seo.description"] || "Portfolio of Serhii Kaminskyi, a fullstack developer.";
  const keywords = locale === "de"
    ? ["Fullstack Entwickler", "Portfolio", "React", "NestJS", "NextJS", "PostgreSQL", "Prisma", "Webentwicklung", "Projekte", "Frontend Entwickler"]
    : ["fullstack developer", "portfolio", "React", "NestJS", "NextJS", "PostgreSQL", "Prisma", "web development", "projects", "frontend developer"];
  const baseUrl = "https://portfolio-rho-silk-a0xo8gr3uc.vercel.app";
  const ogImage = `${baseUrl}/og-hero.png`;
  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    keywords,
    icons: {
      icon: "/favicon-v2.ico",
      shortcut: "/favicon-v2.ico",
      apple: "/favicon-v2.ico",
    },
    alternates: {
      canonical: "/",
      languages: routing.locales.reduce((acc, l) => ({ ...acc, [l]: `/${l}` }), {}),
    },
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Serhii Kaminskyi Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Serhii Kaminskyi Portfolio",
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>

      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-200 dark:bg-black antialiased`}
      >

        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <MainProvider >

            {children}
          </MainProvider>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
