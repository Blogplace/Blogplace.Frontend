"use client";

import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/auth";

export default function LoginPage() {
  const { login } = useAuth();

  const handleLogin = async () => {
    await login("test@example.com", "1234");
  };

  return (
    <div className="mx-auto max-w-6xl pt-12">
      <h1 className="mb-8 text-3xl font-bold">Rejestracja</h1>

      <div className="rounded-xl border border-gray-500/10 bg-gray-500/5 p-12">
        <Button onClick={handleLogin}>Zaloguj się</Button>
      </div>
    </div>
  );
}
