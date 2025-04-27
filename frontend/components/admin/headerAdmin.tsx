import { Pencil, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AdminHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-40 border-b flex items-center justify-center">
      <div className="w-11/12 flex items-center justify-between h-full px-[60px]">
        {/* Logo */}
        <div className="text-3xl font-black tracking-widest">
          PORT<span className="font-normal">FLOW</span>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-8 text-gray-600 text-sm font-medium">
          <Link className="flex items-center gap-2 border-r pr-4 hover:text-blue-600" href={"/admin/create_project"}>
            <Pencil className="w-4 h-4" />
            <span>New Project</span>
          </Link>
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            <Link className="flex items-center gap-2 pr-4 hover:text-blue-600" href={"/portfolio"}>
              <span>View Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
