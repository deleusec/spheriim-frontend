import ClassInfo from "../components/ClassInfo.tsx";
import NextLesson from "../components/NextLesson.tsx";
import Students from '../pages/Students';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { data } from '../components/Graph';
import Calendar from "./Calendar";

const NewStudents = data.datasets[0].data[1]

ChartJS.register(ArcElement, Tooltip, Legend);

function Class() {
    return (
        <>
            <ClassInfo/>
            <div className="grid grid-cols-10 auto-rows-auto gap-5 px-8">
                <div className="flex col-start-1 col-span-5 row-start-1 row-span-1 h-full w-full">
                    <NextLesson/>
                </div>
                <div className="flex col-start-6 col-span-5 row-start-1 row-span-1 h-72 w-full justify-center rounded-xl shadow-cards bg-white p-5 relative">
                    <Doughnut data={data}/>
                    <p className="absolute text-4xl text-primary" style={{ top: '47%' }}>{NewStudents}%</p>
                </div>
            </div>
            <div className="mt-10 rounded-xl shadow-cards bg-white mx-8">
                <Students/>
            </div>
            <div className="mt-10 rounded-xl shadow-cards bg-white mx-8">
                <Calendar/>
            </div>

        </>
    );
}

export default Class;