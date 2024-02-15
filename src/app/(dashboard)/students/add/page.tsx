'use client'

import loadingSpinner from '@/components/LoadingSpinner'
import getUserSession from '@/lib/getUserSessions'
import { UserPlusIcon } from '@heroicons/react/16/solid'
import { useRouter } from 'next/navigation'

const studentTableName = 'spheriim_student'
import getSupabase from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export default function AddStudent() {
  const [name, setName] = useState<String>('')
  const [firstname, setFirstname] = useState<string>('')
  const [student_email, setStudentEmail] = useState<string>('')
  const [personnal_email, setPersonnalEmail] = useState<string>('')
  const [school_year, setSchoolYear] = useState<string>('')
  const [start_year, setStartYear] = useState<string>('')
  const [student_status, setStudentStatus] = useState<string>('')
  const [student_class, setStudentClass] = useState<number>(0)
  const [github_link, setGithubLink] = useState<string>('')
  const [linkedin_link, setLinkedinLink] = useState<string>('')
  const [portfolio_link, setPortfolioLink] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [skill, setSkill] = useState<string>('')
  const [con, setCons] = useState<string>('')
  const [pro, setPros] = useState<string>('')
  const [school_name, setSchoolName] = useState<string>('')
  const [level_studies, setLevelStudies] = useState<string>('')
  const [start_month, setStartMonth] = useState<string>('')
  const [end_month, setEndMonth] = useState<string>('')
  const [name_company, setNameCompany] = useState<string>('')
  const [job, setJob] = useState<string>('')
  const [start_month_job, setStartMonthJob] = useState<string>('')
  const [end_month_job, setEndMonthJob] = useState<string>('')
  const [status_job, setStatusJob] = useState<string>('')
  const [desc_job, setDescJob] = useState<string>('')

  let links = [
    { name: 'github', url: github_link },
    { name: 'linkedin', url: linkedin_link },
    { name: 'portfolio', url: portfolio_link },
  ]
  let skills = [skill]
  let cons = [con]
  let pros = [pro]
  let studies = [
    {
      school_name: school_name,
      level: level_studies,
      start_date: start_month,
      end_date: end_month,
    },
  ]
  let experiences = [
    {
      company_name: name_company,
      job: job,
      start_date: start_month_job,
      end_date: end_month_job,
      status: status_job,
      description: desc_job,
    },
  ]
  // const [monObjetJSON, setMonObjetJSON] = useState<object>({name:"", fistname: ""});

  const studentData = () => {
    addData(
      name as string,
      firstname as string,
      student_email as string,
      personnal_email as string,
      school_year as string,
      start_year as string,
      student_status as string,
      student_class as number,
      links as object,
      desc as string,
      skills as object,
      cons as object,
      pros as object,
      studies as object,
      experiences as object
    ).then(r => console.log(r))
  }

  async function addData(
    name: string,
    firstname: string,
    student_email: string,
    personnal_email: string,
    school_year: string,
    start_year: string,
    student_status: string,
    student_class: number,
    links: object,
    desc: string,
    skills: object,
    cons: object,
    pros: object,
    studies: object,
    experiences: object
  ) {
    console.log(name)
    const res = await getSupabase().from(studentTableName).insert({
      name: name,
      firstname: firstname,
      student_email: student_email,
      personnal_email: personnal_email,
      school_year: school_year,
      start_year: start_year,
      student_status: student_status,
      class_id: student_class,
      links: links,
      description: desc,
      skills: skills,
      wished_improvement: cons,
      tools: pros,
      studies: studies,
      experiences: experiences,
    })
    return res.data
  }

  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const auth = async () => {
      const {
        data: { session },
      } = await getUserSession()

      if (!session) {
        router.replace('/auth/login')
      } else {
        setIsLoading(false)
      }
    }
    auth()
  }, [])

  if (isLoading) {
    return loadingSpinner()
  }

  return (
    <section className="flex flex-col w-full">
      <section className="w-full flex justify-center items-center gap-12 p-6 bg-white">
        <div className="w-1/6 max-w-[140px]">
          <UserPlusIcon className="text-primary" />
        </div>
        <div>
          <h1 className="text-2xl lg:text-4xl text-primary font-medium">
            Ajout d&apos;étudiant
          </h1>
        </div>
      </section>
      <div className="flex flex-col items-center py-4">
        <section className="grid w-full auto-rows-auto grid-cols-2 gap-x-16 gap-y-8 gap-8 px-24 py-6">
          <div className="col-span-full shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
            <h3 className="text-primary">Informations globales</h3>

            <div className="flex gap-8 items-center justify-center">
              <label>
                <span className="text-primary">Photo</span> de l&apos;étudiant
              </label>
              <div className="relative">
                <label
                  htmlFor="pic"
                  className="flex justify-center items-center rounded-full w-20 h-20 border-dashed border-2 text-4xl text-gray-400 bg-light-background cursor-pointer"
                >
                  +
                </label>

                <input
                  type="file"
                  id="pic"
                  name="pic"
                  accept="image/png, image/jpeg"
                  className="absolute opacity-0"
                />
              </div>
            </div>

            <div className="grid w-full auto-rows-auto grid-cols-2 gap-x-32 gap-y-8">
              <div>
                <label htmlFor="name">
                  <span className="text-primary">Nom</span> de l&apos;étudiant
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nom..."
                  value={name as string}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="firstname">
                  <span className="text-primary">Prénom</span> de
                  l&apos;étudiant
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Prénom..."
                  value={firstname}
                  onChange={e => setFirstname(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="schoolEmail">
                  <span className="text-primary">Email</span> étudiant
                </label>
                <input
                  type="email"
                  name="schoolEmail"
                  id="schoolEmail"
                  placeholder="Email étudiant..."
                  value={student_email}
                  onChange={e => setStudentEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="proEmail">
                  <span className="text-primary">Email</span> personnel
                </label>
                <input
                  type="email"
                  name="proEmail"
                  id="proEmail"
                  placeholder="Email personnel..."
                  value={personnal_email}
                  onChange={e => setPersonnalEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="year-select">
                  <span className="text-primary">Année</span> de l&apos;étudiant
                </label>
                <select
                  name="years"
                  id="year-select"
                  value={school_year}
                  onChange={e => setSchoolYear(e.target.value)}
                >
                  <option value="" className="text-gray-900">
                    --Choisir Année--
                  </option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="A3">A3</option>
                  <option value="A4">A4</option>
                  <option value="A5">A5</option>
                </select>
              </div>

              <div>
                <label htmlFor="class-select">
                  Classe de{' '}
                  <span className="text-primary">l&apos;étudiant</span>
                </label>
                <select
                  name="classes"
                  id="class-select"
                  value={student_class}
                  onChange={e => setStudentClass(parseInt(e.target.value))}
                >
                  <option value="" className="text-gray-900">
                    --Choisir Classe--
                  </option>
                  <option value="1">Fullstack</option>
                  <option value="2">IWM</option>
                  <option value="3">MTD</option>
                  <option value="4">Creative Tech</option>
                </select>
              </div>

              <div>
                <label htmlFor="start-year-select">
                  <span className="text-primary">Année de début</span> de
                  l&apos;étudiant
                </label>
                <select
                  name="start-years"
                  id="start-year-select"
                  value={start_year}
                  onChange={e => setStartYear(e.target.value)}
                >
                  <option value="" className="text-gray-900">
                    --Choisir Année de début--
                  </option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="A3">A3</option>
                  <option value="A4">A4</option>
                  <option value="A5">A5</option>
                </select>
              </div>

              <div>
                <label htmlFor="start-year-select">
                  <span className="text-primary">Statut</span> de
                  l&apos;étudiant
                </label>
                <select
                  name="start-years"
                  id="start-year-select"
                  value={student_status}
                  onChange={e => setStudentStatus(e.target.value)}
                >
                  <option value="" className="text-gray-900">
                    --Choisir Statut--
                  </option>
                  <option value="Initial">en Initial</option>
                  <option value="Stagiaire">Stagiaire</option>
                  <option value="Alternant">Alternant</option>
                </select>
              </div>

              <div>
                <label htmlFor="linkGithub">
                  Lien <span className="text-primary">Github</span>
                </label>
                <input
                  type="text"
                  name="linkGithub"
                  id="linkGithub"
                  placeholder="Lien Github..."
                  value={github_link}
                  onChange={e => setGithubLink(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="linkLinkedin">
                  Lien <span className="text-primary">LinkedIn</span>
                </label>
                <input
                  type="text"
                  name="linkLinkedin"
                  id="linkLinkedin"
                  placeholder="Lien LinkedIn..."
                  value={linkedin_link}
                  onChange={e => setLinkedinLink(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="linkPortfolio">
                  Lien <span className="text-primary">Portfolio</span>
                </label>
                <input
                  type="text"
                  name="linkPortfolio"
                  id="linkPortfolio"
                  placeholder="Lien Portfolio..."
                  value={portfolio_link}
                  onChange={e => setPortfolioLink(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label>
                  <span className="text-primary">CV</span> de l&apos;étudiant
                </label>
                <div className="relative">
                  <label
                    htmlFor="cv"
                    className="flex justify-center items-center rounded-md border-dashed border-2 w-24 text-3xl text-gray-400 bg-light-background cursor-pointer"
                  >
                    +
                  </label>

                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf"
                    className="absolute opacity-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
            <h3 className="text-primary">Projet d&apos;avenir</h3>
            <div>
              <textarea
                id="future-project"
                name="future-project"
                rows={3}
                cols={50}
                placeholder="Texte..."
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
            </div>
          </div>

          <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
            <h3 className="text-primary">Compétences acquises</h3>

            <div className="grid w-full auto-rows-auto grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="skill"
                  id="skill"
                  placeholder="Compétence..."
                  value={skill}
                  onChange={e => setSkill(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
            <h3 className="text-primary">Axes d&apos;amélioration</h3>

            <div className="grid w-full auto-rows-auto grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="cons"
                  id="cons"
                  placeholder="Axe d'amélioration.."
                  value={con}
                  onChange={e => setCons(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
            <h3 className="text-primary">Technos préférés</h3>

            <div className="grid w-full auto-rows-auto grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="pros"
                  id="pros"
                  placeholder="Techno..."
                  value={pro}
                  onChange={e => setPros(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
            <h3 className="text-primary">Parcours étudiant</h3>

            <div className="flex flex-col items-center justify-center gap-y-4">
              <div className="grid w-full auto-rows-auto grid-cols-2 gap-8">
                <div>
                  <label htmlFor="nameSchool">
                    Nom de{' '}
                    <span className="text-primary">l&apos;établissement</span>
                  </label>
                  <input
                    type="text"
                    name="nameSchool"
                    id="nameSchool"
                    placeholder="Établissement..."
                    value={school_name}
                    onChange={e => setSchoolName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="level-studies">
                    <span className="text-primary">Niveau</span> d&apos;étude
                  </label>
                  <input
                    type="text"
                    name="level-studies"
                    id="level-studies"
                    placeholder="Niveau..."
                    value={level_studies}
                    onChange={e => setLevelStudies(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="start-month">
                    <span className="text-primary">Début année</span>{' '}
                    d&apos;étude
                  </label>
                  <input
                    type="month"
                    name="start-month"
                    id="start-month"
                    placeholder="Indiquer Année..."
                    value={start_month}
                    onChange={e => setStartMonth(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="end-month">
                    <span className="text-primary">Fin année</span> d&apos;étude
                  </label>
                  <input
                    type="month"
                    name="end-month"
                    id="end-month"
                    placeholder="Indiquer Année..."
                    value={end_month}
                    onChange={e => setEndMonth(e.target.value)}
                  />
                </div>
              </div>
              <hr className="w-3/4" />
            </div>
          </div>

          <div className="shadow-cards rounded-xl bg-white py-4 px-8 flex flex-col items-center gap-8 mb-2">
            <h3 className="text-primary">Expérience professionnelle</h3>

            <div className="flex flex-col items-center justify-center gap-y-4">
              <div className="grid w-full auto-rows-auto grid-cols-2 gap-8">
                <div>
                  <label htmlFor="nameCompany">
                    Nom de{' '}
                    <span className="text-primary">l&apos;entreprise</span>
                  </label>
                  <input
                    type="text"
                    name="nameCompany"
                    id="nameCompany"
                    placeholder="Entreprise..."
                    value={name_company}
                    onChange={e => setNameCompany(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="job">
                    <span className="text-primary">Poste</span>
                  </label>
                  <input
                    type="text"
                    name="job"
                    id="job"
                    placeholder="Poste..."
                    value={job}
                    onChange={e => setJob(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="start-month">
                    <span className="text-primary">Début</span> du poste
                  </label>
                  <input
                    type="month"
                    name="start-month-job"
                    id="start-month-job"
                    placeholder="Indiquer Année..."
                    value={start_month_job}
                    onChange={e => setStartMonthJob(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="end-month">
                    <span className="text-primary">Fin</span> du poste
                  </label>
                  <input
                    type="month"
                    name="end-month-job"
                    id="end-month-job"
                    placeholder="Indiquer Année..."
                    value={end_month_job}
                    onChange={e => setEndMonthJob(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="statut-job">
                    <span className="text-primary">Statut</span> lors du poste
                  </label>
                  <select
                    name="jobPosition"
                    id="statut-job"
                    value={status_job}
                    onChange={e => setStatusJob(e.target.value)}
                  >
                    <option value="" className="text-gray-900">
                      --Choisir Statut--
                    </option>
                    <option value="Stagiaire">Stagiaire</option>
                    <option value="Alternant">Alternant</option>
                    <option value="Cdi">CDI</option>
                    <option value="Cdd">CDD</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="desc-job">
                    <span className="text-primary">Description</span> du poste
                  </label>
                  <textarea
                    id="desc-job"
                    name="desc-job"
                    rows={2}
                    cols={50}
                    placeholder="Texte..."
                    value={desc_job}
                    onChange={e => setDescJob(e.target.value)}
                  />
                </div>
              </div>
              <hr className="w-3/4" />
            </div>
          </div>
        </section>

        <button
          type="submit"
          onClick={studentData}
          className="flex items-center gap-4 py-3 px-4 border-2 border-primary border-solid rounded-lg text-sm bg-primary text-white transition-all hover:bg-transparent hover:text-primary"
        >
          Ajouter étudiant
        </button>
      </div>
    </section>
  )
}
