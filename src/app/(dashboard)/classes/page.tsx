"use client";
import HeadTitles from "@/components/HeadTitles";
import { useState } from "react";
import Card from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faComputerMouse, faCube, faGamepad, faGear, faPencil, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

function Classes() {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab: string) => {
      setActiveTab(tab);
  };

  return (
      <div>
          <HeadTitles title='Nos classes' subtitle='Découvrez toutes les classes de l’IIM' />
          <div className='p-8'>
              <Card className='flex w-full justify-between'>
                  <ul className="h-max border-2 w-2/4">
                      <li
                          className={` p-6 border-b-2 hover:bg-primary hover:text-white ${activeTab === 'communication' ? 'bg-primary text-white' : ''
                              }`}
                          onClick={() => handleTabClick('communication')}
                      >
                        
                          <a href="#" className="flex items-center">
                          <FontAwesomeIcon icon={faComputerMouse} className="pr-3 text-2xl"/>
                          Communication Digitale et E-Bussiness
                          </a>
                      </li>
                      <li
                          className={` p-6 border-b-2 hover:bg-primary hover:text-white ${activeTab === 'coding' ? 'bg-primary text-white' : ''
                              }`}
                          onClick={() => handleTabClick('coding')}
                      >
                                                  
                          <a href="#" className="flex items-center">
                          <FontAwesomeIcon icon={faCode} className="pr-3 text-2xl"/>
                          Coding & Digital Innovation
                          </a>
                      </li>
                      <li
                          className={` p-6 border-b-2 hover:bg-primary hover:text-white ${activeTab === 'aimation' ? 'bg-primary text-white' : ''
                              }`}
                          onClick={() => handleTabClick('aimation')}
                      >
                                                  
                          <a href="#" className="flex items-center">
                          <FontAwesomeIcon icon={faCube} className="pr-3 text-2xl"/>
                          Animation 3D
                          </a>
                      </li>
                      <li
                          className={` p-6 border-b-2 hover:bg-primary hover:text-white ${activeTab === 'jeux' ? 'bg-primary text-white' : ''
                              }`}
                          onClick={() => handleTabClick('jeux')}
                      >
                                                  
                          <a href="#" className="flex items-center">
                          <FontAwesomeIcon icon={faGamepad} className="pr-3 text-2xl"/>
                          Jeux vidéo
                          </a>
                      </li>
                      <li
                          className={` p-6 border-b-2 hover:bg-primary hover:text-white ${activeTab === 'creation' ? 'bg-primary text-white' : ''
                              }`}
                          onClick={() => handleTabClick('creation')}
                      >
                                                  
                          <a href="#" className="flex items-center">
                          <FontAwesomeIcon icon={faPencil} className="pr-3 text-2xl"/>
                          Création et Design
                          </a>
                      </li>
                      <li
                          className={` p-6 border-b-2 hover:bg-primary hover:text-white ${activeTab === 'audiovisuel' ? 'bg-primary text-white' : ''
                              }`}
                          onClick={() => handleTabClick('audiovisuel')}
                      >
                                                  
                          <a href="#" className="flex items-center">
                          <FontAwesomeIcon icon={faRecordVinyl} className="pr-3 text-2xl"/>
                          Audiovisuel
                          </a>
                      </li>
                      <li
                          className={` p-6 border-b-2 hover:bg-primary hover:text-white ${activeTab === 'summer' ? 'bg-primary text-white' : ''
                              }`}
                          onClick={() => handleTabClick('summer')}
                      >
                                                  
                          <a href="#" className="flex items-center">
                          <FontAwesomeIcon icon={faGear} className="pr-3 text-2xl"/>
                          IIM Summer School
                          </a>
                      </li>
                  </ul>
                  <div className="classes w-2/4 border-y-2 border-r-2">
                      <ul className={`communication  ${activeTab === 'communication' ? '' : 'hidden'}`}>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Stratégies E-Business</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Stratégie Social Média & Influence</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Digital Marketing & Data Analytics</a></li>

                      </ul>
                      <ul className={`coding ${activeTab === 'coding' ? '' : 'hidden'}`}>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Creative Technology</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Développeur Fullstack</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Management de la Transformation Digitale</a></li>
                      </ul>
                      <ul className={`aimation ${activeTab === 'aimation' ? '' : 'hidden'}`}>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Gestion de Production 3D</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Réalisation et Animation 3D</a></li>
                      </ul>
                      <ul className={`jeux ${activeTab === 'jeux' ? '' : 'hidden'}`}>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Game Design</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Game Programming</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Game Art</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">MBA Spécialisé Vidéo Game Management</a></li>
                      </ul>
                      <ul className={`creation ${activeTab === 'creation' ? '' : 'hidden'}`}>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Direction Artistique</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Product Design UX-UI</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Mastère Interactivité et UX Design</a></li>
                      </ul>
                      <ul className={`audiovisuel ${activeTab === 'audiovisuel' ? '' : 'hidden'}`}>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Bachelor Audiovisuel</a></li>
                      </ul>
                      <ul className={`summer ${activeTab === 'summer' ? '' : 'hidden'}`}>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Summer School Paris</a></li>
                          <li className="p-6 border-b-2 list-none hover:bg-light-background"><a href="#">Summer School Nantes</a></li>
                      </ul>
                  </div>
              </Card>
          </div>
      </div>
  );
}
export default Classes;