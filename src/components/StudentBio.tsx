import HeaderCards from "./HeaderCards.tsx";
import UserTieIcon from "../assets/icons/user-tie.svg";
function StudentBio(props: { bio: string }) {
    const { bio } = props;

    return (
        <div className="p-[16px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards svg={UserTieIcon} title="Projet d'avenir" />
            <div className="p-1">
                <p className="text-sm">{bio}</p>
            </div>
        </div>
    );
}

export default StudentBio;