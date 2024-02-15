"use client"

import TeacherInfo from "@/components/TeacherInfo";
import TeacherBio from "@/components/TeacherBio";
import TeacherFunFacts from "@/components/TeacherFunFacts";
import SchoolCard from "@/components/SchoolCard";
import CareerCard from "@/components/CareerCard";
import AppButton from "@/components/ui/AppButton";
import { ListBulletIcon, XMarkIcon, PencilIcon } from "@heroicons/react/24/outline";
import getSupabase from "@/lib/supabase/client";
import LinksList from "@/components/LinksList";
import KeyPoints from "@/components/KeyPoints";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getUserSession from "@/lib/getUserSessions";
import loadingSpinner from "@/components/LoadingSpinner";

const teacherTableName = 'spheriim_teacher';

async function getData(id: number) {

    const { data, error } = await getSupabase()
        .from(teacherTableName)
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error);
        return;
    }

    return data;
}

export default function Teacher({ params }: { params: { id: number } }) {

    const [isLoading, setIsLoading] = useState(true);
    const [teacherData, setTeacherData] = useState<any>({});
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
            setTeacherData(data);
        };
        fetchData();
    }, [params.id]);

    if (isLoading) {
        return loadingSpinner();
    }

    return (
        <section className="flex flex-col w-full">
            <TeacherInfo firstname={teacherData?.firstname} name={teacherData?.name} mail={teacherData?.email} speciality={teacherData?.speciality} />
            <div className="flex justify-end w-full gap-10 items-center p-[40px] pb-0">
                <AppButton color="red" icon={<XMarkIcon width={20} />}>
                    Supprimer la fiche professeur
                </AppButton>
                <AppButton color="gray" icon={<PencilIcon width={20} />}>
                    Modifier la fiche professeur
                </AppButton>
            </div>
            <div className="grid grid-cols-9 auto-rows-auto gap-5 p-8">
                <div className="flex col-start-1 col-span-4 row-start-1 row-span-1 h-full w-full">
                    <LinksList links={teacherData?.links} />
                </div>
                <div className="flex col-start-5 col-span-6 row-start-1 row-span-1 h-full w-full">
                    <TeacherBio bio={teacherData?.personal_description} />
                </div>
                <div className="flex col-start-1 col-span-6 row-start-2 row-span-2 h-full w-full">
                    <TeacherFunFacts fun_facts={teacherData?.fun_facts} />
                </div>
                <div className="flex col-start-7 col-span-4 row-start-2 row-span-2 h-full w-full">
                    <KeyPoints technos={teacherData?.skills} svg={<ListBulletIcon className="w-[18px] h-[18px] text-white" />} title="Compétences" />
                </div>
                <div className="flex col-start-1 col-span-10 row-start-4 row-span-1 h-full w-full">
                    <SchoolCard studies={teacherData?.studies} />
                </div>
                <div className="flex col-start-1 col-span-10 row-start-5 row-span-1 h-full w-full">
                    <CareerCard experiences={teacherData?.experiences} />
                </div>
            </div>
        </section>
    );
}