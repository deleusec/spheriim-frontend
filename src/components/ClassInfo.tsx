import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { tabData } from '@/app/(dashboard)/classes/page';

interface ClassInfoProps {
  section: string;
  id: number;
}

function ClassInfo({ section, id }: ClassInfoProps) {
  const axeData = tabData.find(item => item.id === section);
  let classData = '';
  let axeTitle = '';
  if (axeData) {
    axeTitle = axeData.title
    classData = axeData.children[id] || '';
  }
  return (
    <section className="w-full flex justify-center items-center gap-12 p-6 mb-8 bg-white">
      <div className="w-1/3 md:w-1/5 max-w-[200px]">
        <FontAwesomeIcon icon={faCode} size="5x" className="text-primary" />
      </div>
      <div>
        <h2 className="mb-6 text-xl lg:text-2xl">{classData}</h2>
        <ul className="gap-4">
          <li className="mb-2"><span className="text-primary font-medium">Groupe : </span> ALT 1</li>
          <li className="mb-2"><span className="text-primary font-medium">Axe : </span> {axeTitle}</li>
          <li className="mb-2"><span className="text-primary font-medium">Année :</span> A4</li>
          <li className="mb-2"><span className="text-primary font-medium">Nombre d’étudiants : </span> 28</li>
        </ul>
      </div>
    </section>
  );
}

export default ClassInfo;
