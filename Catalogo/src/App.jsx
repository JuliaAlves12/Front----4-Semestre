import { BrowserRouter, Route, Routes} from "react-router-dom";
import Card from "./components/Card/Card";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}