import ListingHeader from "../components/HeadTitles"
import Calendar from "./Calendar";

function Home() {
    return (
        <div>
            <ListingHeader title="Accueil" subtitle="Bienvenue sur SpherIIM" />
            <Calendar />
        </div>
    );
}

export default Home;