import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function HeaderForms() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-40  flex items-center justify-center">
      {/* Ações */}
      <div className="flex items-center gap-8 text-gray-600 text-sm font-medium">
        <Link
          className="flex items-center gap-2 pr-4 hover:text-blue-600"
          href={"/admin"}
        >
          <Undo2 className="w-4 h-4" />
          <span>Back to projects</span>
        </Link>
      </div>
    </header>
  );
}
