import CareerContent from "./CareerContent.tsx";
import HeaderCards from "./HeaderCards.tsx";
import BriefCaseIcon from "../assets/icons/briefcase.svg";
import BuildingIcon from "../assets/icons/building_icon.svg";

function CareerCard(props: { experiences?: object[] }) {
    const { experiences } = props;

    return (
        <div className="p-[16px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards svg={BriefCaseIcon} title="Expérience"/>
            <div className="flex flex-col justify-start gap-4">
                {experiences.map((experience, index) => (
                    <CareerContent key={index} logo={experience.logo ? experience.logo : BuildingIcon} title={experience.title} jobPosition={experience.job_position} job={experience.job} dateStart={experience.start_year} dateEnd={experience.end_year} description={experience.description} />
                ))}
            </div>
        </div>
    );
}

export default CareerCard;