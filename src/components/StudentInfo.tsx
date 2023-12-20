function StudentInfo(props: { profilePic: string, firstname: string; name: string; mail: string; grade: string; startYear: string; jobPosition: string; job: string; company: string; }) {
    const { profilePic, firstname, name, mail, grade, startYear, jobPosition, job, company } = props;

    return (
        <section className="w-full flex justify-center items-center gap-12 p-6 bg-white">
            <div className="w-1/3 md:w-1/5 max-w-[200px]">
                <img className="w-full h-full object-contain rounded-full" src={profilePic} alt="student picture" />
            </div>
            <div>
                <h2 className="mb-6 text-xl lg:text-2xl">{firstname} <span className="uppercase">{name}</span></h2>
                <ul className="gap-4">
                    <li className="mb-2"><span className="text-primary font-medium">Mail : </span> <a className="underline" href={`mailto:${mail}`}>{mail}</a></li>
                    <li className="mb-2"><span className="text-primary font-medium">Classe : </span> {grade}</li>
                    <li className="mb-2"><span className="text-primary font-medium">Début à l'IIM : </span> {startYear}</li>
                    {job && jobPosition && company && (
                        <li className="mb-2">
                            <span className="text-primary font-medium">{jobPosition} : </span>
                            {job} - {company}
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
}


export default StudentInfo;