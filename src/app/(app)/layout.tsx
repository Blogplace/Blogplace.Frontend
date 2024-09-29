"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import useAuth from "@/hooks/auth";
// import Loading from "@/components/loading";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: "/",
  });

  // if (!user) {
  //   return <Loading />;
  // }

  return (
    <>
      <Navbar />
      <main className="mt-10 py-10">{children}</main>
      <Footer />
    </>
  );
}
