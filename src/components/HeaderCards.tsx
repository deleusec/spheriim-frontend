import { ReactNode } from "react";

interface HeaderCardsProps {
    svg?: ReactNode
    title: string;
}

function HeaderCards(props: HeaderCardsProps) {

    const { svg, title } = props;
    

    return (
        <div className="flex items-center gap-4 mb-2">
            <div className='bg-primary h-9 w-9 rounded-xl flex justify-center items-center'>
                {svg}
            </div>
            <h3 className="text-xl font-medium">{title}</h3>
        </div>
    );
}



export default HeaderCards;