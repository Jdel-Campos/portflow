export default function ProjectSidebar() {
    return (
        <aside className="w-40 shadow-md rounded-lg p-4 h-fit">
                    <h2 className="text-xl font-semibold mb-4"> PORTFLOW </h2>
                    <ul className="space-y-2">
                        <li>
                            <button className="w-full text-left px-3 py-2 rounded hover:bg-blue-100 transition">
                                ➕ Novo Projeto
                            </button>
                        </li>
                        <li>
                            <button className="w-full text-left px-3 py-2 rounded hover:bg-blue-100 transition">
                                🗂️ Ordenar por data
                            </button>
                        </li>
                    </ul>
        </aside>
    );
}