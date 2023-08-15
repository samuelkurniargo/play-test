import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Detailpage from "./pages/Detailpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
