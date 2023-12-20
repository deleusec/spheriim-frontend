import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { HomeIcon, AcademicCapIcon, UsersIcon, BriefcaseIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function Sidebar() {
    const isHome = useMatch('/') ? true : false;
    const isStudents = useMatch('/students') ? true : false;
    const isClasses = useMatch('/classes') ? true : false;
    const isTeachers = useMatch('/teachers') ? true : false;
    const isSettings = useMatch('/settings') ? true : false;
    const isLogin = useMatch('/login') ? true : false;

    const [sidebarOpen, setSidebarOpen] = useState(true)


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div className={`flex flex-col items-center relative h-[100vh] gap-5 p-10 border-r border-light-background ${sidebarOpen?"p-10": "p-5"}`}>
            <div className="flex items-center justify-center absolute z-50 -translate-y-1/2 top-1/2 left-full w-4 h-12 bg-primary hover:bg-primary-light rounded-e-lg cursor-pointer" onClick={toggleSidebar}>
                <ChevronRightIcon className={`w-4 h-4 text-light-background ${sidebarOpen ? "rotate-180" : "rotate-0"} duration-200`} />
            </div>
            <div className="mb-10">
                { sidebarOpen ? <Link className="font-bold text-3xl" to="/">Spher<span className="bg-gradient-to-b from-primary to-primary-light inline-block text-transparent bg-clip-text">IIM</span></Link>
                : <Link className="font-bold text-3xl" to="/"><img src="./spheriim.svg" alt="Spheriim logo" className="w-10" /></Link>}
            </div>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link to="/">
                            <SidebarButton text="Accueil" active={isHome} sidebarIsOpen={sidebarOpen} >
                                <HomeIcon className="w-5 h-5" />
                            </SidebarButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="students">
                            <SidebarButton text="Etudiants" active={isStudents} sidebarIsOpen={sidebarOpen}>
                                <AcademicCapIcon className="w-5 h-5" />
                            </SidebarButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="classes">
                            <SidebarButton text="Classes" active={isClasses} sidebarIsOpen={sidebarOpen}>
                                <UsersIcon className="w-5 h-5" />
                            </SidebarButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="teachers">
                            <SidebarButton text="Professeurs" active={isTeachers} sidebarIsOpen={sidebarOpen}>
                                <BriefcaseIcon className="w-5 h-5" />
                            </SidebarButton>
                        </Link>
                    </li>

                </ul>
            </nav>

            <div className="flex-1"></div>

            <div className="space-y-2">
                <div>
                    <Link to="settings">
                        <SidebarButton text="Paramètres" active={isSettings} sidebarIsOpen={sidebarOpen}>
                            <Cog6ToothIcon className="w-5 h-5" />
                        </SidebarButton>
                    </Link>
                </div>
                <div>
                    <Link to="login">
                        <SidebarButton text="Déconnexion" active={isLogin} sidebarIsOpen={sidebarOpen}>
                            <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
                        </SidebarButton>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;