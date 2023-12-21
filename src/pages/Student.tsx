import StudentInfo from "../components/StudentInfo.tsx";
import LinksList from "../components/LinksList.tsx";
import StudentBio from "../components/StudentBio.tsx";
import SchoolCard from "../components/SchoolCard.tsx";
import CareerCard from "../components/CareerCard.tsx";
import HeaderCards from "../components/HeaderCards";
import KeyPoints from "../components/KeyPoints";

import ListIcon from "../assets/icons/list.svg"
import ArrowTrendDownIcon from "../assets/icons/arrow-trend-down.svg"
import ComputerCodeIcon from "../assets/icons/list.svg"
import {useLocation} from "react-router-dom";

function Student() {
    const location = useLocation();
    const studentData = location.state?.studentData;

    return (
        <>
            <section className="flex flex-col w-full">
                <StudentInfo profilePic={studentData?.picture} firstname={studentData?.firstname} name={studentData?.name} mail={studentData?.email} grade={studentData?.class.name}  startYear={studentData?.start_year} job={studentData?.job} jobPosition={studentData?.jobPosition} company={studentData?.company} />
                <div className="grid grid-cols-9 auto-rows-auto gap-5 p-8">
                    <div className="flex col-start-1 col-span-4 row-start-1 row-span-1 h-full w-full">
                        <LinksList links={studentData?.links} />
                    </div>
                    <div className="flex col-start-5 col-span-6 row-start-1 row-span-1 h-full w-full">
                        <StudentBio bio={studentData?.project_description} />
                    </div>
                        <div className="col-start-1 col-span-3 row-start-2 row-span-1 flex">
                            <KeyPoints technos={studentData?.skills} svg={ListIcon} title="Compétences acquises" />
                        </div>
                        <div className="col-start-4 col-span-3 row-start-2 row-span-1 flex">
                            <KeyPoints technos={studentData?.wished_improvement} svg={ArrowTrendDownIcon} title="Points d’amélioration" />
                        </div>
                        <div className="col-start-7 col-span-4 row-start-2 row-span-1 flex">
                            <KeyPoints technos={studentData?.tools} svg={ComputerCodeIcon} title="Technos préférées" />
                        </div>
                        <div className="flex col-span-10 row-start-3 row-span-1 h-full w-full">
                            <SchoolCard />
                        </div>
                        <div className="flex col-span-10 row-start-4 row-span-1 h-full w-full">
                            <CareerCard />
                        </div>
                    </div>
            </section>
        </>
    );
}

export default Student;