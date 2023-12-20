import HeaderCards from './HeaderCards';
import LinkIcon from '../assets/icons/link.svg';

function LinksList() {

    return (
        <div className=" p-[16px] w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards svg={LinkIcon} title="Liens"/>
            <div>
                <ul className="flex flex-col gap-4 text-sm">
                    <li className="text-primary">
                        Github : <a href="" className="text-black border-b-[1px] border-black mx-2">CamilleDev</a>
                    </li>
                    <li className="text-primary">
                        Linkedin : <a href="" className="text-black border-b-[1px] border-black mx-2">www.linkedin.com/in/camille</a>               
                    </li>
                    <li className="text-primary">
                        Portfolio : <a href="" className="text-black border-b-[1px] border-black mx-2">https://portfolio-camille</a>
                    </li>
                    <li className="text-primary">
                        CV : <a href="" className="text-black border-b-[1px] border-black mx-2">Cliquer ici</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LinksList;