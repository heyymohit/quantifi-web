import {
  Routes,
  Route,
} from "react-router-dom";
import Desktop1 from "./components/desktop-1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Desktop1 />} />
    </Routes>
  );
}
export default App;
