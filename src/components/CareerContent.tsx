import React from 'react';
import {CalendarDaysIcon} from '@heroicons/react/24/solid';

class CareerContent extends React.Component {
    render() {
        const { logo, title, job, dateStart, dateEnd, description } = this.props;

        const dateEndDisplay = dateEnd ? dateEnd : "en cours...";
        return (
            <div className="flex items-center gap-4 w-full">
                <div className="w-1/4 max-w-[70px]">
                    <img className="w-full object-contain" src={logo} alt="logo company"/>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-primary text-lg mb-2 font-medium">{title}</h4>
                    <p className="text-sm">{job}</p>
                    <p className="text-sm flex items-center gap-2"><span><CalendarDaysIcon className="h-4 w-4"/></span> {dateStart} - {dateEndDisplay}</p>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        );
    }
}

export default CareerContent;
