import HeaderCards from "./HeaderCards";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
function StudentBio(props: { bio: string }) {
    const { bio } = props;

    return (
        <div className="p-[16px] pb-[40px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards svg={<RocketLaunchIcon className="w-[18px] h-[18px] text-white"/>} title="Projet d'avenir" />
            <div className="p-1">
                <p className="text-sm">{bio}</p>
            </div>
        </div>
    );
}

export default StudentBio;