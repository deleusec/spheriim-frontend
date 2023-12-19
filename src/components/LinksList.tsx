import React from 'react';
import HeaderCards from './HeaderCards';


function LinksList() {

    return (
        <div className=" p-[16px] h-auto w-auto max-w-[24rem] rounded-xl shadow-cards flex flex-col gap-4">
            <HeaderCards svg="https://cdn-icons-png.flaticon.com/512/733/733579.png" title="Liens"/> 
            <div>
                <ul className="flex flex-col gap-4">
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