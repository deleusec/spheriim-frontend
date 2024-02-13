import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full h-screen bg-light-background overflow-y-auto">{children}</main>
        </div>
    );
}
