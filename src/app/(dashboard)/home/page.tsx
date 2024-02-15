"use client"

import HeadTitles from "@/components/HeadTitles";
import loadingSpinner from "@/components/LoadingSpinner";
import getUserSession from "@/lib/getUserSessions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = async () => {
      const {
        data: { session },
      } = await getUserSession();

      if (!session) {
        router.replace('/auth/login');
      } else {
        setIsLoading(false)
      }
      console.log(session)
    }
    auth();
  }, [])

  if (isLoading) {
    return loadingSpinner();
  }


  return (
    <div className="flex flex-col items-center justify-center">
      <HeadTitles title="Accueil" subtitle="Bienvenue sur SpherIIM" />
    </div>
  );
}