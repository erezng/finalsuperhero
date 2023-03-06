import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetails from "./pages/card-details/CardDetails";
import CardList from "./pages/card-list/CardList";
import EditCard from "./pages/edit-card/EditCard";
import NavBar from "./components/navbar/NavBar";
import Favorites from "./pages/favorites/Favorites";
import Lost from "./pages/lost/Lost";
import AddCard from "./components/add-card/AddCard";
function App() {
  return (
    <>
      <NavBar/>
      {/* <AddCard/> */}
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="*" element={<Lost />} />
        <Route path="/cards" element={<CardList />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/cards/edit/:id" element={<EditCard />} />
        <Route path="/card/details/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
