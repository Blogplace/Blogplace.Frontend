"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState, useCallback } from "react";

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [],
  );

  const handleBlur = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const handleFocus = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  return (
    <div className="relative">
      <div className="relative">
        <Input
          placeholder="Wpisz szukaną frazę..."
          className="pr-10"
          value={searchQuery}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-3">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </button>
      </div>
      {isDropdownOpen && searchQuery && (
        <div className="absolute -bottom-3 left-0 h-64 w-full translate-y-full overflow-hidden break-all rounded-lg border border-gray-200 bg-gray-100 p-3 text-sm">
          {searchQuery}
        </div>
      )}
    </div>
  );
}
