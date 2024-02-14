import HeadTitles from "@/components/HeadTitles";
import getUserSession from "@/lib/getUserSessions";
import { redirect } from "next/navigation";

export default async function Home() {
  
  const {
    data: { session },
  } = await getUserSession();

  if (!session) {
    return redirect('/auth/login');
  }

    return (
        <div className="flex flex-col items-center justify-center">
          <HeadTitles title="Accueil" subtitle="Bienvenue sur SpherIIM" />
        </div>
    );
}