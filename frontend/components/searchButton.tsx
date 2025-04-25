"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchButton({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Do you need a specific project?"
      className="border rounded px-4 py-2 w-72 shadow-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
