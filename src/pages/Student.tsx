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
                <StudentInfo profilePic={studentData?.profilePic} firstname={studentData?.firstName} name={studentData?.name} mail={studentData?.email} grade={studentData?.class}  startYear={studentData?.startYear} job={studentData?.job} jobPosition={studentData?.jobPosition} company={studentData?.company} />
                <div className="grid grid-cols-9 auto-rows-auto gap-5 p-8">
                    <div className="flex col-start-1 col-span-4 row-start-1 row-span-1 h-full w-full">
                        <LinksList github={studentData?.github} linkedin={studentData?.linkedin} portfolio={studentData?.porfolio} />
                    </div>
                    <div className="flex col-start-5 col-span-6 row-start-1 row-span-1 h-full w-full">
                        <StudentBio bio={studentData?.bio} />
                    </div>
                        <div className="col-start-1 col-span-3 row-start-2 row-span-1 p-[16px] h-auto w-auto max-w-[24rem] rounded-xl shadow-cards flex flex-col gap-4 align-center bg-white">
                            <HeaderCards svg={ListIcon} title="Compétences acquises" />
                            <div className="gap-16 flex max-h-96 h-full">
                                <ul className="gap-6 flex flex-col">
                                    <KeyPoints li="HTML" />
                                    <KeyPoints li="Javascript" />
                                    <KeyPoints li="Laravel" />
                                    <KeyPoints li="Vue JS" />
                                    <KeyPoints li="Tailwind" />
                                </ul>
                                <ul className="gap-6 flex flex-col">
                                    <KeyPoints li="CSS" />
                                    <KeyPoints li="Sass" />
                                    <KeyPoints li="React" />
                                    <KeyPoints li="Bootstrap" />
                                    <KeyPoints li="Wordpress" />
                                </ul>
                            </div>
                        </div>
                        <div className="col-start-4 col-span-3 row-start-2 row-span-1 p-[16px] h-auto w-auto max-w-[24rem] rounded-xl shadow-cards flex flex-col gap-4 align-center bg-white">
                            <HeaderCards svg={ArrowTrendDownIcon} title="Points d'amélioration" />
                            <ul className="gap-6 flex flex-col">
                                <KeyPoints li="Gestion de projet" />
                                <KeyPoints li="PHP" />
                                <KeyPoints li="Symfony" />
                                <KeyPoints li="Node JS" />
                            </ul>
                        </div>
                        <div className="col-start-7 col-span-3 row-start-2 row-span-1 p-[16px] h-auto w-auto max-w-[24rem] rounded-xl shadow-cards flex flex-col gap-4 align-center bg-white">
                            <HeaderCards svg={ComputerCodeIcon} title="Technos préférées" />
                            <ul className="gap-6 flex flex-col">
                                <KeyPoints li="Laravel" />
                                <KeyPoints li="Vue JS" />
                                <KeyPoints li="Tailwind" />
                            </ul>
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