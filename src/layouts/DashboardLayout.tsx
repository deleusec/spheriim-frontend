import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
    return (
        <main>
            <Sidebar />
            <Outlet />
        </main>
    );
}

export default DashboardLayout;