import HeaderCards from './HeaderCards'
import { LinkIcon } from '@heroicons/react/24/outline'

interface LinksListProps {
  links?: LinksProps[]
}

interface LinksProps {
  name: string
  url: string
}

function LinksList(props: LinksListProps) {
  const { links } = props

  return (
    <div className=" p-[16px] w-full rounded-xl shadow-cards flex flex-col gap-4 bg-white">
      <HeaderCards
        svg={<LinkIcon className="w-[18px] h-[18px] text-white" />}
        title="Liens"
      />
      <div>
        <ul className="flex flex-col gap-4 text-sm">
          {links?.map((link, index) => (
            <li key={index}>
              <span className="text-primary capitalize">{link.name} : </span>
              <a
                href={link.url}
                target="_blank"
                className="text-black border-b-[1px] border-black"
              >
                {' '}
                {link.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LinksList
