import Header from "./components/sections/Header";
import Favorites from "./components/sections/Favorites";
import MainImg from "./components/sections/MainImg";
import Menu from "./components/sections/Menu";
import Events from "./components/sections/Events";
import History from "./components/sections/History";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Favorites />
      <MainImg />
      <Menu />
      <Events />
      <History />
    </div>
  );
}
