import { Link } from "lucide-react";
import { LinkInputProps } from "@/types/forms.types";

export default function LinkInput({ id, label, placeholder, value, onChange }: LinkInputProps) {
  return (
    <div className="w-auto">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900 mb-1">
        {label}
      </label>
      <div className="mt-2 relative w-full mx-auto">
        <div className="flex items-center gap-3 rounded-md border outline-1 -outline-offset-1 outline-gray-300 bg-white px-3 py-2 shadow-sm focus-within:outline-2 focus-within:outline-indigo-600">
          <Link className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
          <input
            id={id}
            name={id}
            type="url"
            value={value}
            placeholder={placeholder || `Https of the project on the platform - ${label}`}
            onChange={(e) => onChange(id, e.target.value)}
            className="block w-full bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none text-sm"
          />
        </div>
      </div>
    </div>
  );
}