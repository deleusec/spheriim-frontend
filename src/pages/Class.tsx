import ClassInfo from "../components/ClassInfo.tsx";
import NextLesson from "../components/NextLesson.tsx";
import StudentBio from "../components/StudentBio.tsx";
import Students from '../pages/Students';
function Class() {
    return (
        <>
            <ClassInfo />
            <div className="grid grid-cols-9 auto-rows-auto gap-8 px-8">
                <div className="flex col-start-1 col-span-4 row-start-1 row-span-1 h-full w-full">
                    <NextLesson />
                </div>
                <div className="flex col-start-5 col-span-6 row-start-1 row-span-1 h-full w-full">
                    <StudentBio bio="Souhaite devenir développeuse Front-end ou chef de projet et travailler à l’étranger." />
                </div>
            </div>
            <Students />
        </>
    );
}

export default Class;