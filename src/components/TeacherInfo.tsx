import Image from 'next/image'
import ProfileImageDefault from '@/assets/images/user-profile.jpg'

function TeacherInfo(props: {
  picture?: string
  firstname: string
  name: string
  mail: string
  speciality: string
}) {
  const { picture, firstname, name, mail, speciality } = props

  const profilePicDisplay = picture ? picture : ProfileImageDefault

  return (
    <section className="w-full flex justify-center items-center gap-12 p-6 bg-white">
      <div className="w-1/3 md:w-1/5 max-w-[200px]">
        <Image
          src={profilePicDisplay}
          alt="Photo du professeur"
          width={500}
          height={500}
          className='rounded-full'
        />
      </div>
      <div>
        <h2 className="mb-6 text-xl lg:text-2xl">
          {firstname} <span className="uppercase">{name}</span>
        </h2>
        <ul className="gap-4">
          <li className="mb-2">
            <span className="text-primary font-medium">Mail : </span>{' '}
            <a className="underline" href={`mailto:${mail}`}>
              {mail}
            </a>
          </li>
          <li className="mb-2">
            <span className="text-primary font-medium">Spécialité : </span>{' '}
            {speciality}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TeacherInfo
