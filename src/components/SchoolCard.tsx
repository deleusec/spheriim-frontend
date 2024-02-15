import CareerContent from './CareerContent'
import HeaderCards from './HeaderCards'
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline'
import SchoolIcon from '../assets/icons/school_icon.svg'
import Image from 'next/image'

interface SchoolCardProps {
  studies: StudiesProps[]
}

interface StudiesProps {
  logo?: string
  school_name: string
  level: string
  start_date: string
  end_date?: string
}

function CareerCard(props: SchoolCardProps) {
  const { studies } = props
  return (
    <div className="p-[16px] pb-[40px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
      <HeaderCards
        svg={<AcademicCapIcon className="w-[18px] h-[18px] text-white" />}
        title="Parcours"
      />
      <div className="flex flex-col justify-start gap-4">
        {studies &&
          studies.map((study: StudiesProps, index: number) => (
            <CareerContent
              key={index}
              logo={
                study.logo ? (
                  <Image
                    src={study.logo}
                    width={40}
                    height={40}
                    alt="logo studies"
                  />
                ) : (
                  <BuildingLibraryIcon className="w-[25px] h-[25px] text-white" />
                )
              }
              title={study.school_name}
              job={study.level}
              dateStart={study.start_date}
              dateEnd={study.end_date}
            />
          ))}
      </div>
    </div>
  )
}

export default CareerCard
