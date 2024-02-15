import Image from 'next/image'
import ProfileImageDefault from '@/assets/images/user-profile.jpg'
function StudentInfo(props: {
  profilePic?: string
  firstname: string
  name: string
  student_mail: string
  personnal_email: string
  grade: string
  startYear: string
  jobPosition: string
  job: string
  company: string
}) {
  const {
    profilePic,
    firstname,
    name,
    student_mail,
    personnal_email,
    grade,
    startYear,
    jobPosition,
    job,
    company,
  } = props

  const profilePicDisplay = profilePic ? profilePic : ProfileImageDefault

  return (
    <section className="w-full flex justify-center items-center gap-12 p-6 bg-white">
      {profilePicDisplay && (
        <div className="w-1/3 md:w-1/5 max-w-[200px]">
          <Image
            src={profilePicDisplay}
            alt="profile picture"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      )}
      <div>
        <h2 className="mb-6 text-xl lg:text-2xl">
          {firstname} <span className="uppercase">{name}</span>
        </h2>
        <ul className="gap-4">
          <li className="mb-2">
            <span className="text-primary font-medium">Mail étudiant : </span>{' '}
            <a className="underline" href={`mailto:${student_mail}`}>
              {student_mail}
            </a>
          </li>
          <li className="mb-2">
            <span className="text-primary font-medium">Mail personnel: </span>{' '}
            <a className="underline" href={`mailto:${personnal_email}`}>
              {personnal_email}
            </a>
          </li>

          <li className="mb-2">
            <span className="text-primary font-medium">Classe : </span> {grade}
          </li>
          <li className="mb-2">
            <span className="text-primary font-medium">Début à IIM : </span>{' '}
            {startYear}
          </li>
          {job && jobPosition && company && (
            <li className="mb-2">
              <span className="text-primary font-medium">{jobPosition} : </span>
              {job} - {company}
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default StudentInfo
