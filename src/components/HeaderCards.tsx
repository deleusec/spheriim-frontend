import Image from "next/image";

function HeaderCards(props: { svg: string, title: string; }) {

    const { svg, title } = props;

    return (
        <div className="flex items-center gap-4 mb-2">
            <div className='bg-primary h-9 w-9 rounded-xl flex justify-center items-center'>
                {svg && <Image width={18} height={18} src={svg} alt="picto" className='h-[18px] w-[18px]' />}
            </div>
            <h3 className="text-xl font-medium">{title}</h3>
        </div>
    );
}



export default HeaderCards;