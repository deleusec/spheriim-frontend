"use client";

import SidebarButton from "./SidebarButton";
import { usePathname } from "next/navigation";
import Link from 'next/link'
import Image from 'next/image'
import { HomeIcon, AcademicCapIcon, UsersIcon, BriefcaseIcon, Cog6ToothIcon, ChevronRightIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const pathname = usePathname();

    console.log();


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }



    return (
        <div className={`flex flex-col items-center relative h-[100vh] gap-5 p-10 border-r border-light-background ${sidebarOpen ? "p-10" : "p-5"}`}>
            <div className="flex items-center justify-center absolute z-50 -translate-y-1/2 top-1/2 left-full w-4 h-12 bg-primary hover:bg-primary-light rounded-e-lg cursor-pointer" onClick={toggleSidebar}>
                <ChevronRightIcon className={`w-4 h-4 text-light-background ${sidebarOpen ? "rotate-180" : "rotate-0"} duration-200`} />
            </div>
            <div className="mb-10">
                {sidebarOpen ? <Link className="font-bold text-3xl" href="/home">Spher<span className="bg-gradient-to-b from-primary to-primary-light inline-block text-transparent bg-clip-text">IIM</span></Link>
                    : <Link className="font-bold text-3xl" href="/"><Image src="/spheriim.svg" width={40} height={40} alt="Spheriim logo" className="w-10" /></Link>}
            </div>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link href={'/home'}>
                            <SidebarButton text="Accueil" active={pathname === '/home'} sidebarIsOpen={sidebarOpen} >
                                <HomeIcon className="w-5 h-5" />
                            </SidebarButton>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/students'}>
                            <SidebarButton text="Etudiants" active={pathname?.includes('/students')} sidebarIsOpen={sidebarOpen}>
                                <AcademicCapIcon className="w-5 h-5" />
                            </SidebarButton>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/classes'}>
                            <SidebarButton text="Classes" active={pathname?.includes('/classes')} sidebarIsOpen={sidebarOpen}>
                                <UsersIcon className="w-5 h-5" />
                            </SidebarButton>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/teachers'}>
                            <SidebarButton text="Professeurs" active={pathname?.includes('/teachers')} sidebarIsOpen={sidebarOpen}>
                                <BriefcaseIcon className="w-5 h-5" />
                            </SidebarButton>
                        </Link>
                    </li>

                </ul>
            </nav>

            <div className="flex-1"></div>

            <div className="space-y-2">
                <div>
                    <Link href={'/settings'}>
                        <SidebarButton text="Paramètres" active={pathname?.includes('/settings')} sidebarIsOpen={sidebarOpen}>
                            <Cog6ToothIcon className="w-5 h-5" />
                        </SidebarButton>
                    </Link>
                </div>
                <div>
                    <Link href={'/login'}>
                        <SidebarButton text="Déconnexion" active={false} sidebarIsOpen={sidebarOpen}>
                            <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
                        </SidebarButton>
                    </Link>
                </div>

            </div>
        </div>
    )
}
