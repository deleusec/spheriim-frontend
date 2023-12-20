import StudentInfo from "../components/StudentInfo.tsx";
import LinksList from "../components/LinksList.tsx";
import StudentBio from "../components/StudentBio.tsx";
import SchoolCard from "../components/SchoolCard.tsx";
import CareerCard from "../components/CareerCard.tsx";

function Student() {
    return (
        <>
            <StudentInfo/>
            <div className="grid grid-cols-9 auto-rows-auto gap-5 px-5">
                <div className="flex col-start-1 col-span-4 row-start-1 row-span-1 h-full w-full">
                    <LinksList/>
                </div>
                <div className="flex col-start-5 col-span-6 row-start-1 row-span-1 h-full w-full">
                    <StudentBio bio="Souhaite devenir développeuse Front-end ou chef de projet et travailler à l’étranger."/>
                </div>
                <div className="flex col-span-10 row-start-2 row-span-1 h-full w-full">
                    <SchoolCard/>
                </div>
                <div className="flex col-span-10 row-start-3 row-span-1 h-full w-full">
                    <CareerCard/>
                </div>
            </div>
        </>
    );
}

export default Student;