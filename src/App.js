import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UpdateList from "./components/UpdateList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<UpdateList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
