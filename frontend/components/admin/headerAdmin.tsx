"use client";

interface HeaderAdminProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onNewProject?: () => void;
}

export default function HeaderAdmin({ searchTerm, onSearchChange, onNewProject }: HeaderAdminProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b shadow z-50 h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onNewProject}
          className="text-sm text-gray-600 hover:underline"
        >
          Manage Portfolio Projects
        </button>
        <input
          type="text"
          placeholder="Search projects ..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="border rounded px-3 py-1 text-sm w-60"
        />
      </div>
    </header>
  );
}
