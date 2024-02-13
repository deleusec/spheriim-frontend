import CareerContent from "./CareerContent";
import HeaderCards from "./HeaderCards";
import { BriefcaseIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";

interface CareerCardProps {
    experiences?: ExperiencesProps[];
}

interface ExperiencesProps {
    logo?: string;
    title: string;
    job_position: string;
    job: string;
    start_year: string;
    end_year?: string;
    description?: string
}

function CareerCard(props: CareerCardProps) {
    const { experiences } = props;

    return (
        <div className="p-[16px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards svg={<BriefcaseIcon className="w-[18px] h-[18px] text-white"/>} title="Expérience"/>
            <div className="flex flex-col justify-start gap-4">
                {experiences?.map((experience, index) => (
                    <CareerContent key={index} logo={experience.logo ? experience.logo : <BuildingOffice2Icon className="w-[18px] h-[18px] text-white"/>} title={experience.title} jobPosition={experience.job_position} job={experience.job} dateStart={experience.start_year} dateEnd={experience.end_year} description={experience.description} />
                ))}
            </div>
        </div>
    );
}

export default CareerCard;