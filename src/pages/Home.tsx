import HeaderCards from "../components/HeaderCards";
import KeyPoints from "../components/KeyPoints";
import LinksList from "../components/LinksList";

function Home() {
    return (
        <>
            <h1>Accueil</h1>

            <div className="flex">
                <div className=" p-[16px] h-auto w-auto max-w-[24rem] rounded-xl shadow-cards flex flex-col gap-4 align-center bg-white">
                    <HeaderCards svg="./src/assets/icons/list.svg" title="Compétences acquises"/>
                    <div className="gap-16 flex max-h-96 h-full">
                        <ul className="gap-6 flex flex-col">
                            <KeyPoints li="HTML"/>
                            <KeyPoints li="Javascript"/>
                            <KeyPoints li="Laravel"/>
                            <KeyPoints li="Vue JS"/>
                            <KeyPoints li="Tailwind"/>
                        </ul>
                        <ul className="gap-6 flex flex-col">
                            <KeyPoints li="CSS"/>
                            <KeyPoints li="Sass"/>
                            <KeyPoints li="React"/>
                            <KeyPoints li="Bootstrap"/>
                            <KeyPoints li="Wordpress"/>
                        </ul>
                    </div>
                </div>
                <div className=" p-[16px] h-auto w-auto max-w-[24rem] rounded-xl shadow-cards flex flex-col gap-4 align-center bg-white">
                    <HeaderCards svg="./src/assets/icons/arrow-down.svg" title="Points d'amélioration"/>
                    <ul className="gap-6 flex flex-col">
                        <KeyPoints li="Gestion de projet"/>
                        <KeyPoints li="PHP"/>
                        <KeyPoints li="Symfony"/>
                        <KeyPoints li="Node JS"/>
                    </ul>
                </div>
                <div className=" p-[16px] h-auto w-auto max-w-[24rem] rounded-xl shadow-cards flex flex-col gap-4 align-center bg-white">
                    <HeaderCards svg="./src/assets/icons/computer-code.svg" title="Technos préférées"/>
                    <ul className="gap-6 flex flex-col">
                        <KeyPoints li="Laravel"/>
                        <KeyPoints li="Vue JS"/>
                        <KeyPoints li="Tailwind"/>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;