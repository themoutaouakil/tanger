import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "IMIGO Immigration Tanger - Votre nouvelle vie au Canada",
  description: "Cabinet d'immigration agréé à Tanger. Obtenez votre résidence permanente au Canada avec Entrée Express. 15 ans d'expérience, 95% de taux de réussite.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="https://imigoimmigration.com/wp-content/uploads/2023/12/m-imigo-2-1.png" />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

