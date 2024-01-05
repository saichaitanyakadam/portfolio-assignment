import "./App.css";
import Header from "./components/Header";
import { About, Contacts, Projects } from "./pages";
import AddProject from "./components/AddProject";
import footerImage from "./assets/Vector.png";
import { AppContext } from "./context/AppContext";
import { projects } from "./constants/AppConstants";
import { useState } from "react";

function App() {
  const [projectsArr, setProjectsArr] = useState(projects);
  return (
    <AppContext.Provider value={{ projectsArr, setProjectsArr }}>
      <div>
        <header>
          <Header />
        </header>

        <section>
          <About />
          <AddProject />
          <Projects />
          <Contacts />
        </section>
        <footer>
          <img src={footerImage} alt="footer" className="w-full" />
        </footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
