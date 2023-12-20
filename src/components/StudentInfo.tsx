import React from "react";

class StudentInfo extends React.Component {
    render() {
        const { firstname, name, mail, axe, grade, startYear, jobPosition, job, company } = this.props;

        return (
            <section className="w-full flex justify-center items-center gap-12 p-6 mb-8 bg-white">
                <div className="w-1/3 md:w-1/5 max-w-[200px]">
                    <img className="w-full h-full object-contain rounded-full" src="https://varbai.com/wp-content/uploads/2019/02/thispersondoesnotexis.jpg" alt="student picture"/>
                </div>
                <div>
                    <h2 className="mb-6 text-xl lg:text-2xl">{firstname} <span className="uppercase">{name}</span></h2>
                    <ul className="gap-4">
                        <li className="mb-2"><span className="text-primary font-medium">Mail : </span> <a className="underline" href={`mailto:${mail}`}>{mail}</a></li>
                        <li className="mb-2"><span className="text-primary font-medium">Axe :</span> {axe}</li>
                        <li className="mb-2"><span className="text-primary font-medium">Année : </span> {grade}</li>
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
}

export default StudentInfo;