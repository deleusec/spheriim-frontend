'use client'
import ClassInfo from '@/components/ClassInfo'
import NextLesson from '@/components/NextLesson'
// import Students from "@/components/Students";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { data } from '@/components/Graph'
import { useRouter } from 'next/navigation'
import getUserSession from '@/lib/getUserSessions'
import { useEffect, useState } from 'react'
import loadingSpinner from '@/components/LoadingSpinner'
// import Calendar from "@/components/Calendar";

export default function Class() {
  const NewStudents = data.datasets[0].data[1]

  ChartJS.register(ArcElement, Tooltip, Legend)

  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const auth = async () => {
      const {
        data: { session },
      } = await getUserSession()

      if (!session) {
        router.replace('/auth/login')
      } else {
        setIsLoading(false)
      }
    }
    auth()
  }, [])

  if (isLoading) {
    return loadingSpinner()
  }

  return (
    <>
      <ClassInfo />
      <div className="grid grid-cols-10 auto-rows-auto gap-5 px-8">
        <div className="flex col-start-1 col-span-5 row-start-1 row-span-1 h-full w-full">
          <NextLesson />
        </div>
        <div className="flex col-start-6 col-span-5 row-start-1 row-span-1 h-72 w-full justify-center rounded-xl shadow-cards bg-white p-5 relative">
          <Doughnut data={data} className="w-full h-full max-h-full" />
          <p className="absolute text-4xl text-primary" style={{ top: '47%' }}>
            {NewStudents}%
          </p>
        </div>
      </div>
      <div className="mt-10 rounded-xl shadow-cards bg-white mx-8">
        {/* <Students/> */}
      </div>
      <div className="mt-10 rounded-xl shadow-cards bg-white mx-8">
        {/* <Calendar/> */}
      </div>
    </>
  )
}
