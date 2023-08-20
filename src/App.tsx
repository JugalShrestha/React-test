import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routine from "./pages/project-pages/Routine";
import SearchPage from "./pages/SearchPage";
import Syllabus from "./pages/project-pages/Syllabus";
import CoverpageGenerator from "./pages/project-pages/CoverpageGenerator/CoverpageGenerator";
import Text2Hw from "./pages/project-pages/Text2Hw/Text2Hw";
import rootBranch from "./components/variables/rootBranch";

const App = () => {
  return (
    <Router>
      <div className="everything">
        <NavBar />
        <SearchBar />
        <Routes>
          <Route path={rootBranch} element={<SearchPage searchItem={""} />} />
          <Route
            path="/projects"
            element={<SearchPage searchItem={"project"} />}
          />
          <Route path="/notes" element={<SearchPage searchItem={"note"} />} />
          <Route path="/routine" element={<Routine />} />
          <Route
            path="/search"
            element={<SearchPage searchItem={""} />}
          ></Route>
          <Route path="/syllabus" element={<Syllabus />}></Route>
          <Route
            path="/coverpage-generator"
            element={<CoverpageGenerator />}
          ></Route>
          <Route path="/text2hw" element={<Text2Hw />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
