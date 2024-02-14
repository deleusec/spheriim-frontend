import CareerContent from "./CareerContent";
import HeaderCards from "./HeaderCards";
import { AcademicCapIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import SchoolIcon from "../assets/icons/school_icon.svg";
import Image from "next/image";

interface SchoolCardProps {
    studies: StudiesProps[];
}

interface StudiesProps {
    logo?: string;
    title: string;
    degree: string;
    start_year: string;
    end_year?: string;
}

function CareerCard(props: SchoolCardProps) {
    const { studies } = props;
    return (
        <div className="p-[16px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards svg={<AcademicCapIcon className="w-[18px] h-[18px] text-white"/>} title="Parcours"/>
            <div className="flex flex-col justify-start gap-4">
                {studies.map((study: StudiesProps, index: number) => (
                    <CareerContent key={index} logo={study.logo ? <Image src={study.logo} width={40} height={40} alt="logo studies"/> : <BuildingLibraryIcon className="w-[25px] h-[25px] text-white"/>} title={study.title} job={study.degree} dateStart={study.start_year} dateEnd={study.end_year} />
                ))}
            </div>
        </div>
    );
}

export default CareerCard;