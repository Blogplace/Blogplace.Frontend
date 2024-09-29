"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import useAuth from "@/hooks/auth";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  return (
    <>
      <Navbar />
      <main className="mt-10 py-10">{children}</main>
      <Footer />
    </>
  );
}
