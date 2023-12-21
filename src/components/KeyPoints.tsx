import HeaderCards from "./HeaderCards.tsx";

function KeyPoints(props: { technos?: object[], svg?: string, title?: string}) {
    const { technos, svg, title } = props;

    return (
        <div className="col-start-1 col-span-3 row-start-2 row-span-1 p-[16px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 align-center bg-white">
            <HeaderCards svg={svg} title={title} />
            <div className="gap-16 flex max-h-96 h-full px-4">
                <ul className="gap-4 grid grid-cols-2 auto-rows-min w-full">
                    {technos.map((techno, index) => (
                        <li key={index} className="text-primary list-disc ml-4">{techno}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default KeyPoints;