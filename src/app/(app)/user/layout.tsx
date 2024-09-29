"use client";

import useAuth from "@/hooks/auth";
import Loading from "@/components/loading";

export default function AppLayout({
                                      children,
                                  }: {
    children: React.ReactNode;
}) {
    const {user} = useAuth({
        middleware: "auth",
    });

    if (!user) {
        return <Loading/>;
    }

    return <>{children}</>
}
