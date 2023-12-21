import CareerContent from "./CareerContent.tsx";
import HeaderCards from "./HeaderCards.tsx";
import GraduationCapIcon from "../assets/icons/graduation-cap.svg";
import SchoolIcon from "../assets/icons/school_icon.svg";

function CareerCard(props: { studies?: object[] }) {
    const { studies } = props;
    return (
        <div className="p-[16px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards svg={GraduationCapIcon} title="Parcours"/>
            <div className="flex flex-col justify-start gap-4">
                {studies.map((study, index) => (
                    <CareerContent key={index} logo={study.logo ? study.logo : SchoolIcon} title={study.title} job={study.degree} dateStart={study.start_year} dateEnd={study.end_year} />
                ))}
            </div>
        </div>
    );
}

export default CareerCard;