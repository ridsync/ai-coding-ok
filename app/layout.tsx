import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 코딩 교육 랜딩페이지",
  description: "Preview of generated UI components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          storageKey="okdevcomm-theme"
        >
          <div id="root">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
