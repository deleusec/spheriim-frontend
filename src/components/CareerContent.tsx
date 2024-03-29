import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';

function CareerContent(props: {
  logo: React.ReactNode
  title: string
  job: string
  jobPosition?: string
  dateStart: string
  dateEnd?: string
  description?: string
}) {
  const { logo, title, job, jobPosition, dateStart, dateEnd, description } =
    props

  const dateEndDisplay = dateEnd ? dateEnd : 'en cours...'
  return (
    <div className="flex items-center gap-6 w-full px-5">
      <div className="w-1/4 max-w-[40px] text-primary">
          {logo === "job" ? <BuildingOffice2Icon/> : <AcademicCapIcon/> }
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-primary text-lg mb-2 font-medium">{title}</h4>
        <p className="text-sm">{jobPosition}</p>
        <p className="text-sm">{job}</p>
        <p className="text-sm flex items-center gap-2">
          <span>
            <CalendarDaysIcon className="h-4 w-4" />
          </span>{' '}
          {dateStart} - {dateEndDisplay}
        </p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

export default CareerContent
