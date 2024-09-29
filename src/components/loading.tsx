import { LoaderCircleIcon, LoaderIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed z-50 flex h-screen w-screen items-center justify-center bg-background">
      <LoaderCircleIcon className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
