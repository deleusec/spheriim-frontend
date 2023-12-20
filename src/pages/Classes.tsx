import { useState } from 'react';

function Classes() {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='flex w-full justify-center h-full items-center'>
        <div className="content flex items-center shadow-2xl rounded-xl w-5/6 h-5/6 p-14">
            <ul className="h-max border-2">
                <li
                className={` p-6 border-b-2 hover:bg-primary hover:text-white ${
                activeTab === 'communication' ? 'bg-primary text-white' : ''
                }`}
                onClick={() => handleTabClick('communication')}
                >
                    <a href="#">Communication digitale et e-business</a>
                </li>
                <li
                className={` p-6 border-b-2 hover:bg-primary hover:text-white ${
                activeTab === 'coding' ? 'bg-primary text-white' : ''
                }`}
                onClick={() => handleTabClick('coding')}
                >
                    <a href="#">Coding & Digital Innovation</a>
                </li>
                <li
                className={` p-6 border-b-2 hover:bg-primary hover:text-white ${
                activeTab === 'aimation' ? 'bg-primary text-white' : ''
                }`}
                onClick={() => handleTabClick('aimation')}
                >
                    <a href="#">Animation 3D</a>
                </li>
                <li
                className={` p-6 border-b-2 hover:bg-primary hover:text-white ${
                activeTab === 'creation' ? 'bg-primary text-white' : ''
                }`}
                onClick={() => handleTabClick('creation')}
                >
                    <a href="#">Création et design</a>
                </li>
                <li
                className={` p-6 border-b-2 hover:bg-primary hover:text-white ${
                activeTab === 'audiovisuel' ? 'bg-primary text-white' : ''
                }`}
                onClick={() => handleTabClick('audiovisuel')}
                >
                    <a href="#">Audiovisuel</a>
                </li>
                <li
                className={` p-6 border-b-2 hover:bg-primary hover:text-white ${
                activeTab === 'summer' ? 'bg-primary text-white' : ''
                }`}
                onClick={() => handleTabClick('summer')}
                >
                    <a href="#">IIM Summer School</a>
                </li>
            </ul>
            <div className="classes w-2/4">
                <ul className={`communication  ${activeTab === 'communication' ? '' : 'hidden'}`}>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Communication e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Communication e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Communication e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Communication e-business</a></li>
                </ul>
                <ul className={`coding ${activeTab === 'coding' ? '' : 'hidden'}`}>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Coding e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Coding e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Coding e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Coding e-business</a></li>
                </ul>
                <ul className={`aimation ${activeTab === 'aimation' ? '' : 'hidden'}`}>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère aimation e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère aimation e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère aimation e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère aimation e-business</a></li>
                </ul>
                <ul className={`creation ${activeTab === 'creation' ? '' : 'hidden'}`}>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère creation e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère creation e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère creation e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère creation e-business</a></li>
                </ul>                
                <ul className={`audiovisuel ${activeTab === 'audiovisuel' ? '' : 'hidden'}`}>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère audiovisuel e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère audiovisuel e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère audiovisuel e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère audiovisuel e-business</a></li>
                </ul>
                <ul className={`summer ${activeTab === 'summer' ? '' : 'hidden'}`}>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Summer e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Summer e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Summer e-business</a></li>
                    <li className=" ml-10 p-5 list-disc hover:underline"><a href="#">Mastère Summer e-business</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Classes;
