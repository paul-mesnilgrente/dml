import "./App.scss";
import Navbar from "./Navbar";
import Header from "./Header";
import CanalBD from "./CanalBD";
import History from "./History";
import Categories from "./Categories";
import Team from "./Team";
import Contact from "./Contact";
import Support from "./Support";
import Partners from "./Partners";
import SectionSeparator from "./SectionSeparator";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CanalBD />
      <SectionSeparator
        className="one-piece"
        text="Le roi des pirates, ce sera moi !"
        author="Monkey D. Luffy - One Piece (Eiichirō Oda)"
      />
      <Categories />
      <hr className="section-hr" />
      <History />
      <SectionSeparator
        className="tintin"
        text="Marin d'eau douce !"
        author="Le capitaine Haddock - Tintin (Hergé)"
      />
      <Team />
      <hr className="section-hr" />
      <Contact />
      <SectionSeparator
        className="harry-potter"
        text="Tu es un sorcier Harry"
        author="Hagrid - Harry Potter à l'école des sorciers (J.K. Rowling)"
      />
      <Support />
      <hr className="section-hr" />
      <Partners />
    </div>
  );
}

export default App;
