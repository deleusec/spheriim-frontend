import HeaderCards from './HeaderCards';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

function NextLesson() {

    return (
        <div className=" p-[16px] w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
            <HeaderCards title="Prochain cours" svg={<CalendarDaysIcon className="h-6 w-6 text-white" />} />
            <div>
                <ul className="flex flex-col gap-4 text-sm">
                    <li className="text-primary">
                        Date : <a href="" className="text-black border-b-[1px] border-black mx-2">21/12/2021</a>
                    </li>
                    <li className="text-primary">
                        Heure : <a href="" className="text-black border-b-[1px] border-black mx-2">13:30 - 17:00</a>               
                    </li>
                    <li className="text-primary">
                        Salle : <a href="" className="text-black border-b-[1px] border-black mx-2">401</a>
                    </li>
                    <li className="text-primary">
                        Intervenant : <a href="" className="text-black border-b-[1px] border-black mx-2">Alexandre Zerah</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NextLesson;