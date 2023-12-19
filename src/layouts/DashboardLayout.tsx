import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

function DashboardLayout() {
    return (
        <main className="flex">
            <Sidebar />
            <OverlayScrollbarsComponent element='div' options={{ scrollbars: { autoHide: 'scroll' } }} defer className='flex-1'>
                <div className="w-full h-[100vh] max-h-[100vh] bg-light-background">
                    <Outlet />
                </div>
            </OverlayScrollbarsComponent>
        </main>
    );
}

export default DashboardLayout;