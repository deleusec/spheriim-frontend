import { Link, useMatch } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { HomeIcon, AcademicCapIcon, UsersIcon } from '@heroicons/react/24/outline';

function Sidebar() {
    const isHome = useMatch('/') ? true : false;
    const isStudents = useMatch('/students') ? true : false;
    const isClasses = useMatch('/classes') ? true : false;

    
    return (
        <div className="flex flex-col items-center h-[100vh] gap-5 p-10">
            <div className="mb-10">
                <Link className="font-bold text-[40px]" to="/">Spher<span className="bg-gradient-to-b from-primary to-[#F1B575] inline-block text-transparent bg-clip-text">IIM</span></Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <SidebarButton text="Home" active={isHome} >
                                <HomeIcon className="w-6 h-6" />
                            </SidebarButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="students">
                            <SidebarButton text="Etudiants" active={isStudents}>
                                <AcademicCapIcon className="w-6 h-6" />
                            </SidebarButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="classes">
                            <SidebarButton text="Classes" active={isClasses}>
                                <UsersIcon className="w-6 h-6" />
                            </SidebarButton>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;