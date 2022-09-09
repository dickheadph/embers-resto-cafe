import Landing from "./Components/Pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Food, Reservation, Registration } from "./Components/Pages";

function App() {
  return (
    <div className="App bg-gradient-t-b from-green-200 to-transparent">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/food" element={<Food />} />
          <Route path="/reserve" element={<Reservation />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
