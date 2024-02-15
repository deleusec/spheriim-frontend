import HeaderCards from './HeaderCards'
import { UserIcon } from '@heroicons/react/24/outline'

function TeacherBio(props: { bio: string }) {
  const { bio } = props

  return (
    <div className="p-[16px] h-full w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
      <HeaderCards
        svg={<UserIcon className="w-[18px] h-[18px] text-white" />}
        title="Présentation"
      />
      <div className="p-1">
        <p className="text-sm">{bio}</p>
      </div>
    </div>
  )
}

export default TeacherBio
