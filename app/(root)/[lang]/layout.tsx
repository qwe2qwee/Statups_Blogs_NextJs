import Navbar from "@/components/Home/Navbar";
import React from "react";

const layout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "ar" }>;
}>) => {
  const lang = (await params)?.lang;

  return (
    <main className="font-work-sans">
      <Navbar lang={lang} />
      {children}
    </main>
  );
};

export default layout;
