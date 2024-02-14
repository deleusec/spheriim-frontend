import TeacherInfo from "@/components/TeacherInfo";


const teacherTableName = 'spheriim_teacher';
import getSupabase from "@/lib/supabase/client";
import LinksList from "@/components/LinksList";

async function getData(id: number) {
    const res = await getSupabase()
        .from(teacherTableName)
        .select('*')
        .eq('id', id)
        .single();
        return res.data;
  }

export default async function Teacher({ params }: { params: { id: number } }) {
    const teacherData = await getData(params.id as number);
    
    return (
        <section className="flex flex-col w-full">
            <TeacherInfo firstname={teacherData?.firstname} name={teacherData?.name} mail={teacherData?.email} speciality={teacherData?.speciality} />
            <div className="grid grid-cols-9 auto-rows-auto gap-5 p-8">
                <div className="flex col-start-1 col-span-4 row-start-1 row-span-1 h-full w-full">
                    <LinksList links={teacherData?.links} />
                </div>
            </div>
        </section>
    );
}