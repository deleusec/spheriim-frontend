import HeaderCards from "./HeaderCards";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
function TeacherFunFacts(props: { fun_facts : string }) {
    const { fun_facts } = props;

    return (
        <div className="p-[16px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards svg={ < QuestionMarkCircleIcon className="w-[18px] h-[18px] text-white"/>} title="Fun Facts" />
            <div className="p-1">
                <p className="text-sm">{fun_facts}</p>
            </div>
        </div>
    );
}


export default TeacherFunFacts;