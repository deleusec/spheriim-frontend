"use client";
import HeadTitles from "@/components/HeadTitles";
import { useState } from "react";
import Card from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faComputerMouse, faCube, faGamepad, faGear, faPencil, faRecordVinyl, faCaretRight } from '@fortawesome/free-solid-svg-icons';


const tabData = [
  {
    id: 'communication',
    icon: faComputerMouse,
    title: 'Communication Digitale et E-Bussiness',
    children: [
      'Mastère Stratégies E-Business',
      'Mastère Stratégie Social Média & Influence',
      'Mastère Digital Marketing & Data Analytics'
    ]
  },
  {
    id: 'coding',
    icon: faCode,
    title: 'Coding & Digital Innovation',
    children: [
      'Mastère Creative Technology',
      'Mastère Développeur Fullstack',
      'Mastère Management de la Transformation Digitale'
    ]
  },
  {
    id: 'aimation',
    icon: faCube,
    title: 'Animation 3D',
    children: [
      'Mastère Gestion de Production 3D',
      'Mastère Réalisation et Animation 3D'
    ]
  },
  {
    id: 'jeux',
    icon: faGamepad,
    title: 'Jeux vidéo',
    children: [
      'Mastère Game Design',
      'Mastère Game Programming',
      'Mastère Game Art',
      'MBA Spécialisé Vidéo Game Management'
    ]
  },
  {
    id: 'creation',
    icon: faPencil,
    title: 'Création et Design',
    children: [
      'Mastère Direction Artistique',
      'Mastère Product Design UX-UI',
      'Mastère Interactivité et UX Design'
    ]
  },
  {
    id: 'audiovisuel',
    icon: faRecordVinyl,
    title: 'Audiovisuel',
    children: ['Bachelor Audiovisuel']
  },
  {
    id: 'summer',
    icon: faGear,
    title: 'IIM Summer School',
    children: ['Summer School Paris', 'Summer School Nantes']
  }
];

export default function Classes() {
  const [activeTab, setActiveTab] = useState('communication');

  const handleTabClick = (tabId:string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <HeadTitles title='Nos classes' subtitle='Découvrez toutes les classes de l’IIM' />
      <div className='p-8'>
        <Card className='flex w-full justify-between'>
          <ul className="h-max border-2 w-2/4">
            {tabData.map(tab => (
              <li
                key={tab.id}
                className={`p-6 border-b-2 hover:bg-primary hover:text-white relative ${activeTab === tab.id ? 'bg-primary text-white' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <a href="#" className="flex items-center">
                  <FontAwesomeIcon icon={tab.icon} className="pr-3 text-2xl"/>
                  {tab.title}
                </a>
                {activeTab === tab.id ? <FontAwesomeIcon icon={faCaretRight} className="absolute right-[-2px] bottom-1/2 text-4xl text-primary translate-x-1/2 translate-y-1/2" /> : ''}
              </li>
            ))}
          </ul>
          <div className="classes w-2/4 border-y-2 border-r-2">
            {tabData.map(tab => (
              <ul key={tab.id} className={`${tab.id} ${activeTab === tab.id ? '' : 'hidden'}`}>
                {tab.children.map((child, index) => (
                  <li key={index} className="p-6 border-b-2 list-none hover:bg-light-background">
                    <a href="#">{child}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
