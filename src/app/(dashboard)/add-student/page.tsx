import StudentInfo from "@/components/StudentInfo";
import LinksList from "@/components/LinksList";
import StudentBio from "@/components/StudentBio";
import SchoolCard from "@/components/SchoolCard";
import CareerCard from "@/components/CareerCard";
import KeyPoints from "@/components/KeyPoints";

import ListIcon from "../assets/icons/list.svg"
import ArrowTrendDownIcon from "../assets/icons/arrow-trend-down.svg"
import ComputerCodeIcon from "../assets/icons/list.svg"
import Image from "next/image";
import { UserPlusIcon } from "@heroicons/react/16/solid";

export default function AddStudent() {

    return (
        <section className="flex flex-col w-full">
            <section className="w-full flex justify-center items-center gap-12 p-6 bg-white">
                <div className="w-1/6 max-w-[200px]">
                    <UserPlusIcon className="text-primary"/>
                </div>
                <div>
                    <h1 className="text-xl lg:text-2xl text-primary font-medium">Ajout d'étudiant</h1>
                </div>
            </section>
            <section className="flex flex-col items-center py-4">
                <section className="grid w-full auto-rows-auto grid-cols-2 gap-x-16 gap-y-8 gap-8 px-32 py-6">
                    <div className="col-span-full shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
                        <h3 className="text-primary">Informations globales</h3>

                        <div>
                            <label htmlFor="pic" className="rounded-full p-16 border-dashed border-2 ">+</label>

                            <input type="file" id="pic" name="pic" accept="image/png, image/jpeg" />
                        </div>

                        <div className="grid w-full auto-rows-auto grid-cols-2 gap-x-32 gap-y-8">

                            <div>
                                <label htmlFor="name"><span className="text-primary">Nom</span> de l'étudiant</label>
                                <input type="text" name="name" id="name" placeholder="Nom..." />
                            </div>

                            <div>
                                <label htmlFor="firstname"><span className="text-primary">Prénom</span> de l'étudiant</label>
                                <input type="text" name="firstname" id="firstname" placeholder="Prénom..." />
                            </div>

                            <div>
                                <label htmlFor="schoolEmail"><span className="text-primary">Email</span> étudiant</label>
                                <input type="email" name="schoolEmail" id="schoolEmail" placeholder="Email étudiant..." />
                            </div>

                            <div>
                                <label htmlFor="proEmail"><span className="text-primary">Email</span> personnel</label>
                                <input type="email" name="proEmail" id="proEmail" placeholder="Email personnel..." />
                            </div>

                            <div>
                                <label htmlFor="year-select"><span className="text-primary">Année</span> de l'étudiant</label>
                                <select name="years" id="year-select">
                                    <option value="" className="text-gray-900">--Choisir Année--</option>
                                    <option value="a1">A1</option>
                                    <option value="a2">A2</option>
                                    <option value="a3">A3</option>
                                    <option value="a4">A4</option>
                                    <option value="a5">A5</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="class-select">Classe de <span className="text-primary">l'étudiant</span></label>
                                <select name="classes" id="class-select">
                                    <option value="" className="text-gray-900">--Choisir Classe--</option>
                                    <option value="fullstack">Fullstack</option>
                                    <option value="iwm">IWM</option>
                                    <option value="mtd">MTD</option>
                                    <option value="ct">Creative Tech</option>
                                    <option value="cdi">Coding & Digital Innovation</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="start-year-select"><span className="text-primary">Année de début</span> de l'étudiant</label>
                                <select name="start-years" id="start-year-select">
                                    <option value="" className="text-gray-900">--Choisir Année de début--</option>
                                    <option value="a1">A1</option>
                                    <option value="a2">A2</option>
                                    <option value="a3">A3</option>
                                    <option value="a4">A4</option>
                                    <option value="a5">A5</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="start-year-select"><span className="text-primary">Statut</span> de l'étudiant</label>
                                <select name="start-years" id="start-year-select">
                                    <option value="" className="text-gray-900">--Choisir Statut--</option>
                                    <option value="initial">en Initial</option>
                                    <option value="stagiaire">Stagiaire</option>
                                    <option value="alternant">Alternant</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="linkGithub">Lien <span className="text-primary">Github</span></label>
                                <input type="text" name="linkGithub" id="linkGithub" placeholder="Lien Github..." />
                            </div>

                            <div>
                                <label htmlFor="linkLinkedin">Lien <span className="text-primary">LinkedIn</span></label>
                                <input type="text" name="linkLinkedin" id="linkLinkedin" placeholder="Lien LinkedIn..." />
                            </div>

                            <div>
                                <label htmlFor="linkPortfolio">Lien <span className="text-primary">Portfolio</span></label>
                                <input type="text" name="linkPortfolio" id="linkPortfolio" placeholder="Lien Portfolio..." />
                            </div>
                        </div>
                    </div>

                    <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
                        <h3 className="text-primary">Projet d'avenir</h3>
                        <div>
                            <textarea id="future-project" name="future-project" rows="3" cols="50" placeholder="Texte..."/>
                        </div>
                    </div>

                </section>

                <button className="flex items-center gap-4 py-3 px-4 border-2 border-primary border-solid rounded-lg text-sm bg-primary text-white transition-all hover:bg-transparent hover:text-primary" >
                    Ajouter étudiant
                </button>
            </section>

        </section>
    );
}