import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Department from "./pages/Department";
import Review from "./pages/Review";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Layout from "./Layout";
import Accounts from "./pages/admin/Accounts";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/departments/:name" element={<Department />} />
          <Route path="/review/:department" element={<Review />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="accounts/:course" element={<Accounts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
