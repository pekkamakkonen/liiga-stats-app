import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SkatersPage from "./pages/SkatersPage";
import GoaliesPage from "./pages/GoaliesPage";
import TeamsPage from "./pages/TeamsPage";

function App() {
  const padding = {
    padding: 5,
  };

  return (
    <>
      <div>
        <Link style={padding} to="/">
          Home
        </Link>
        <Link style={padding} to="/skaters">
          Skaters
        </Link>
        <Link style={padding} to="/goalies">
          Goalies
        </Link>
        <Link style={padding} to="/teams">
          Teams
        </Link>
        <br /> <br />
      </div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="skaters" element={<SkatersPage />} />
        <Route path="goalies" element={<GoaliesPage />} />
        <Route path="teams" element={<TeamsPage />} />
      </Routes>
    </>
  );
}

export default App;
