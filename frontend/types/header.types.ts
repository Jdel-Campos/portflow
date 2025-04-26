export interface HeaderAdminProps{
    searchTerm: string;
    onSearchChange: (value: string) => void;
    onNewProject?: () => void;
};