"use client"

import KeyPoints from "@/components/KeyPoints";
import LinksList from "@/components/LinksList";
import StudentBio from "@/components/StudentBio";
import StudentInfo from "@/components/StudentInfo";
import SchoolCard from "@/components/SchoolCard";
import CareerCard from "@/components/CareerCard";

import { ListBulletIcon, XMarkIcon } from "@heroicons/react/24/outline";

const studentTableName = 'spheriim_student';
import AppButton from "@/components/ui/AppButton";
import getSupabase from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import getUserSession from "@/lib/getUserSessions";
import { useEffect, useState } from "react";
import loadingSpinner from "@/components/LoadingSpinner";

async function getData(id: number) {
    const res = await getSupabase()
        .from(studentTableName)
        .select('*')
        .eq('id', id)
        .single();
    return res.data;
}

export default function Student({ params }: { params: { id: number } }) {

    const [isLoading, setIsLoading] = useState(true);
    const [studentData, setStudentData] = useState<any>({});
    const router = useRouter();

    useEffect(() => {
        const auth = async () => {
            const {
                data: { session },
            } = await getUserSession();

            if (!session) {
                router.replace('/auth/login');
            } else {
                setIsLoading(false)
            }
        }
        auth();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(params.id as number);
            setStudentData(data);
        };
        fetchData();
    }, [params.id]);

    if (isLoading) {
        return loadingSpinner();
    }



    return (
        <section className="flex flex-col w-full">
            <StudentInfo firstname={studentData?.firstname} name={studentData?.name} mail={studentData?.email} grade={"Hello"} startYear={studentData?.start_year} job={studentData?.job} jobPosition={studentData?.jobPosition} company={studentData?.company} />
            <div className="flex justify-end w-full gap-10 items-center p-[40px] pb-0">
                <AppButton color="red" icon={<XMarkIcon width={20} />}>
                    Supprimer la fiche étudiante
                </AppButton>
            </div>
            <div className="grid grid-cols-9 auto-rows-auto gap-5 p-8">
                <div className="flex col-start-1 col-span-4 row-start-1 row-span-1 h-full w-full">
                    <LinksList links={studentData?.links} />
                </div>
                <div className="flex col-start-5 col-span-6 row-start-1 row-span-1 h-full w-full">
                    <StudentBio bio={studentData?.project_description} />
                </div>
                <div className="col-start-1 col-span-3 row-start-2 row-span-1 flex">
                    <KeyPoints technos={studentData?.skills} svg={<ListBulletIcon className="w-[18px] h-[18px] text-white" />} title="Compétences acquises" />
                </div>
                <div className="col-start-4 col-span-3 row-start-2 row-span-1 flex">
                    <KeyPoints technos={studentData?.wished_improvement} svg={<ListBulletIcon className="w-[18px] h-[18px] text-white" />} title="Points d’amélioration" />
                </div>
                <div className="col-start-7 col-span-4 row-start-2 row-span-1 flex">
                    <KeyPoints technos={studentData?.tools} svg={<ListBulletIcon className="w-[18px] h-[18px] text-white" />} title="Technos préférées" />
                </div>
                <div className="flex col-span-10 row-start-3 row-span-1 h-full w-full">
                    <SchoolCard studies={studentData?.studies} />
                </div>
                <div className="flex col-span-10 row-start-4 row-span-1 h-full w-full">
                    <CareerCard experiences={studentData?.experiences} />
                </div>
            </div>
        </section>
    );
}