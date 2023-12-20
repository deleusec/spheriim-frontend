import HeaderCards from './HeaderCards';
import LinkIcon from '../assets/icons/link.svg';

function LinksList(props: { github: string, linkedin: string, portfolio: string, cv?: string }) {

    const { github, linkedin, portfolio, cv } = props;

    return (
        <div className=" p-[16px] w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards svg={LinkIcon} title="Liens" />
            <div>
                <ul className="flex flex-col gap-4 text-sm">
                    <li className="text-primary">
                        Github : <a href={`https://github/${github}`} target="_blank" className="text-black border-b-[1px] border-black mx-2">{github}</a>
                    </li>
                    <li className="text-primary">
                        Linkedin : <a href={linkedin} target="_blank" className="text-black border-b-[1px] border-black mx-2">{linkedin}</a>
                    </li>
                    <li className="text-primary">
                        Portfolio : <a href={portfolio} target="_blank" className="text-black border-b-[1px] border-black mx-2">{portfolio}</a>
                    </li>
                    <li className="text-primary">
                        CV : <a href={cv} target="_blank" className="text-black border-b-[1px] border-black mx-2">Cliquer ici</a>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default LinksList;