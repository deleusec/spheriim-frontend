import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
<<<<<<< HEAD
            <main className="w-full">{children}</main>
=======
            <main className="w-full h-screen bg-light-background overflow-y-auto">{children}</main>
>>>>>>> 2c0e95ad33153a6a14e70a6914e167b226e6b995
        </div>
    );
}
