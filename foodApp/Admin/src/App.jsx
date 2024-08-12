import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";
import Sidebar from "./components/Sidebar/Sidebar";


export default function App() {

  const url = "http://localhost:3000";

  return (
    <div>
      <Navbar/>
      <hr className=" border-black" />
      <div className="flex">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Add url={url}/>} />
          <Route path="/list" element={<List  url={url}/>} />
          <Route path="/orders" element={<Order url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}
