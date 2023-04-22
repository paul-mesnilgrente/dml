import "./App.scss";
import Navbar from "./Navbar";
import Header from "./Header";
import CanalBD from "./CanalBD";
import History from "./History";
import Categories from "./Categories";
import Team from "./Team";
import Contact from "./Contact";
import Partners from "./Partners";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CanalBD />
      <hr />
      <History />
      <hr />
      <Categories />
      <hr />
      <Team />
      <hr />
      <Contact />
      <hr />
      <Partners />
    </div>
  );
}

export default App;
