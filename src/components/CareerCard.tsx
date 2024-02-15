import CareerContent from "./CareerContent";
import HeaderCards from "./HeaderCards";
import { BriefcaseIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";

interface CareerCardProps {
    experiences?: ExperiencesProps[];
}

interface ExperiencesProps {
    company_name: string;
    status: string;
    job: string;
    start_date: string;
    end_date?: string;
    description?: string
}

function CareerCard(props: CareerCardProps) {
    const { experiences } = props;

    return (
        <div className="p-[16px] pb-[40px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards svg={<BriefcaseIcon className="w-[18px] h-[18px] text-white"/>} title="Expérience"/>
            <div className="flex flex-col justify-start gap-4">
                {experiences?.map((experience, index) => (
                    <CareerContent key={index} logo={<BuildingOffice2Icon className="w-[18px] h-[18px] text-white"/>} title={experience.company_name} jobPosition={experience.status} job={experience.job} dateStart={experience.start_date} dateEnd={experience.end_date} description={experience.description} />
                ))}
            </div>
        </div>
    );
}

export default CareerCard;