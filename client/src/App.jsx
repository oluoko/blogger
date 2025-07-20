import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="login" element={<UserAuthForm type="login" />} />
        <Route path="register" element={<UserAuthForm type="register" />} />
      </Route>
    </Routes>
  );
};

export default App;
