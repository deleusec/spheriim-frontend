import React from "react";
import HeaderCards from "./HeaderCards";

interface KeyPointsProps {
    technos?: string[];
    svg?: React.ReactNode| undefined;
    title?: string| undefined;
}

function KeyPoints(props: KeyPointsProps) {
    const { technos, svg, title } = props;

    return (
        <div className="col-start-1 col-span-3 row-start-2 row-span-1 p-[16px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 align-center bg-white">
            <HeaderCards svg={svg} title={title ? title : ""} />
            <div className="gap-16 flex max-h-96 h-full px-4">
                <ul className="gap-4 grid grid-cols-2 auto-rows-min w-full">
                    {technos?.map((techno, index) => (
                        <li key={index} className="text-primary list-disc ml-4">{techno.toString()}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default KeyPoints;