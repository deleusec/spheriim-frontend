import { UserPlusIcon } from "@heroicons/react/16/solid";

const studentTableName = 'spheriim_student';
import getSupabase from "@/lib/supabase/client";
import AppButton from "@/components/ui/AppButton";

async function addData(id: number) {
    const res = await getSupabase()
        .from(studentTableName)
        .insert({ name: 'testMehdi' })
    return res.data;
}
export default async function addStudent({ params }: { params: { id: number } }) {
    // const res = await getSupabase()
    //     .from(studentTableName)
    //     .insert({
    //         id: 1,
    //         name: name,
    //         firstname : 'Denmark',
    //         picture: 'https://www.google.com',
    //         student_email: '',
    //         personal_email: '',
    //         class_id: 1,
    //         school_year: "A4",
    //         start_year: "A1",
    //         status: "initial",
    //         links: {"github": "https://github.com", "linkedin": "https://linkedin.com", "portfolio": "https://portfolio.com"},
    //         skills: ["HTML", "CSS", "JS"],
    //         wished_improvement: ["React", "NodeJS"],
    //         tools: ["VSCode", "Figma"],
    //         project_description: "Je veux devenir un super dev",
    //         studies: [
    //             {
    //                 school_name: "Epitech",
    //                 level: "Bac+2",
    //                 start_date: "2021-01",
    //                 end_date: "2023-09"
    //             }
    //         ],
    //         experiences: [
    //             {
    //                 company_name: "Google",
    //                 job: "Dev",
    //                 start_date: "2021-09",
    //                 end_date: "2023-09",
    //                 status: "intern",
    //                 description: "J'ai fait du dev"
    //             }
    //         ],
    //
    //     });
    // return res.data;
    const studentData = await addData(params.id as number);

    console.log('studentData');

    return (
        <section className="flex flex-col w-full">
            <section className="w-full flex justify-center items-center gap-12 p-6 bg-white">
                <div className="w-1/6 max-w-[140px]">
                    <UserPlusIcon className="text-primary"/>
                </div>
                <div>
                    <h1 className="text-2xl lg:text-4xl text-primary font-medium">Ajout d&apos;étudiant</h1>
                </div>
            </section>
            <form className="flex flex-col items-center py-4">
                <section className="grid w-full auto-rows-auto grid-cols-2 gap-x-16 gap-y-8 gap-8 px-24 py-6">
                    <div className="col-span-full shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
                        <h3 className="text-primary">Informations globales</h3>

                        <div className="flex gap-8 items-center justify-center">
                            <label><span className="text-primary">Photo</span> de l&apos;étudiant</label>
                            <div className="relative">
                                <label htmlFor="pic" className="flex justify-center items-center rounded-full w-20 h-20 border-dashed border-2 text-4xl text-gray-400 bg-light-background cursor-pointer">+</label>

                                <input type="file" id="pic" name="pic" accept="image/png, image/jpeg" className="absolute opacity-0" />
                            </div>
                        </div>

                        <div className="grid w-full auto-rows-auto grid-cols-2 gap-x-32 gap-y-8">

                            <div>
                                <label htmlFor="name"><span className="text-primary">Nom</span> de l&apos;étudiant</label>
                                <input type="text" name="name" id="name" placeholder="Nom..." />
                            </div>

                            <div>
                                <label htmlFor="firstname"><span className="text-primary">Prénom</span> de l&apos;étudiant</label>
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
                                <label htmlFor="year-select"><span className="text-primary">Année</span> de l&apos;étudiant</label>
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
                                <label htmlFor="class-select">Classe de <span className="text-primary">l&apos;étudiant</span></label>
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
                                <label htmlFor="start-year-select"><span className="text-primary">Année de début</span> de l&apos;étudiant</label>
                                <select name="start-years" id="start-year-select">
                                    <option value="" className="text-gray-900">--Choisir Année de début--</option>
                                    <option value="start-a1">A1</option>
                                    <option value="start-a2">A2</option>
                                    <option value="start-a3">A3</option>
                                    <option value="start-a4">A4</option>
                                    <option value="start-a5">A5</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="start-year-select"><span className="text-primary">Statut</span> de l&apos;étudiant</label>
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

                            <div className="flex flex-col">
                                <label><span className="text-primary">CV</span> de l&apos;étudiant</label>
                                <div className="relative">
                                    <label htmlFor="cv" className="flex justify-center items-center rounded-md border-dashed border-2 w-24 text-3xl text-gray-400 bg-light-background cursor-pointer">+</label>

                                    <input type="file" id="cv" name="cv" accept=".pdf" className="absolute opacity-0" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
                        <h3 className="text-primary">Projet d&apos;avenir</h3>
                        <div>
                            <textarea id="future-project" name="future-project" rows={3} cols={50} placeholder="Texte..."/>
                        </div>
                    </div>

                    <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
                        <h3 className="text-primary">Compétences acquises</h3>

                        <div className="grid w-full auto-rows-auto grid-cols-2 gap-8">
                            <div>
                                <input type="text" name="skill" id="skill" placeholder="Compétence..." />
                            </div>
                        </div>
                    </div>

                    <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
                        <h3 className="text-primary">Axes d&apos;amélioration</h3>

                        <div className="grid w-full auto-rows-auto grid-cols-2 gap-8">
                            <div>
                                <input type="text" name="cons" id="cons" placeholder="Axe d'amélioration.." />
                            </div>
                        </div>
                    </div>

                    <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
                        <h3 className="text-primary">Technos préférés</h3>

                        <div className="grid w-full auto-rows-auto grid-cols-2 gap-8">
                            <div>
                                <input type="text" name="pros" id="pros" placeholder="Techno..." />
                            </div>
                        </div>
                    </div>

                    <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
                        <h3 className="text-primary">Parcours étudiant</h3>

                        <div className="flex flex-col items-center justify-center gap-y-4">
                            <div className="grid w-full auto-rows-auto grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="nameSchool">Nom de <span className="text-primary">l&apos;établissement</span></label>
                                    <input type="text" name="nameSchool" id="nameSchool" placeholder="Établissement..." />
                                </div>

                                <div>
                                    <label htmlFor="level-studies"><span className="text-primary">Niveau</span> d&apos;étude</label>
                                    <input type="text" name="level-studies" id="level-studies" placeholder="Niveau..." />
                                </div>

                                <div>
                                    <label htmlFor="start-month"><span className="text-primary">Début année</span> d&apos;étude</label>
                                    <input type="month" name="start-month" id="start-month" placeholder="Indiquer Année..." />
                                </div>

                                <div>
                                    <label htmlFor="end-month"><span className="text-primary">Fin année</span> d&apos;étude</label>
                                    <input type="month" name="end-month" id="end-month" placeholder="Indiquer Année..." />
                                </div>
                            </div>
                            <hr className="w-3/4"/>
                        </div>
                    </div>

                    <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
                        <h3 className="text-primary">Expérience professionnelle</h3>

                        <div className="flex flex-col items-center justify-center gap-y-4">
                            <div className="grid w-full auto-rows-auto grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="nameCompany">Nom de <span className="text-primary">l&apos;entreprise</span></label>
                                    <input type="text" name="nameCompany" id="nameCompany" placeholder="Entreprise..." />
                                </div>

                                <div>
                                    <label htmlFor="job"><span className="text-primary">Poste</span></label>
                                    <input type="text" name="job" id="job" placeholder="Poste..." />
                                </div>

                                <div>
                                    <label htmlFor="start-month"><span className="text-primary">Début</span> du poste</label>
                                    <input type="month" name="start-month" id="start-month" placeholder="Indiquer Année..." />
                                </div>

                                <div>
                                    <label htmlFor="end-month"><span className="text-primary">Fin</span> du poste</label>
                                    <input type="month" name="end-month" id="end-month" placeholder="Indiquer Année..." />
                                </div>

                                <div>
                                    <label htmlFor="statut-job"><span className="text-primary">Statut</span> lors du poste</label>
                                    <select name="jobPosition" id="statut-job">
                                        <option value="" className="text-gray-900">--Choisir Statut--</option>
                                        <option value="stagiaire">Stagiaire</option>
                                        <option value="alternant">Alternant</option>
                                        <option value="cdi">CDI</option>
                                        <option value="cdd">CDD</option>
                                        <option value="freelance">Freelance</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="desc-job"><span className="text-primary">Description</span> du poste</label>
                                    <textarea id="desc-job" name="desc-job" rows={2} cols={50} placeholder="Texte..."/>
                                </div>
                            </div>
                            <hr className="w-3/4"/>
                        </div>
                    </div>

                </section>

                <button type="submit" className="flex items-center gap-4 py-3 px-4 border-2 border-primary border-solid rounded-lg text-sm bg-primary text-white transition-all hover:bg-transparent hover:text-primary" >
                    Ajouter étudiant
                </button>

            </form>

        </section>
    );
}