//React Router
import { createBrowserRouter } from "react-router-dom";

// Import Layouts
import DashboardLayout from "../layouts/DashboardLayout";

// Import Pages
import Home from "../pages/Home";
import Students from "../pages/Students";
import Student from "../pages/Student";
import Classes from "../pages/Classes";
import Class from "../pages/Class";
import Teachers from "../pages/Teachers";
import Teacher from "../pages/Teacher";
import Settings from "../pages/Settings";
import Login from "../pages/authentication/Login";

const router = createBrowserRouter([
    {
        errorElement: <h1>404 - Not Found</h1>,
        children: [
            {
                element: <DashboardLayout />,
                children: [
                    {
                        path: "/",
                        element: <Home />
                    },
                    {
                        path: "/students",
                        element: <Students />
                    },
                    {
                        path: "/students/:id",
                        element: <Student />
                    },
                    {
                        path: "/classes",
                        element: <Classes />
                    },
                    {
                        path: "/classes/:id",
                        element: <Class />
                    },
                    {
                        path: "/teachers",
                        element: <Teachers />
                    },
                    {
                        path: "/teachers/:id",
                        element: <Teacher />
                    },
                    {
                        path: "/settings",
                        element: <Settings />
                    }
                ]
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }

]);

export default router;