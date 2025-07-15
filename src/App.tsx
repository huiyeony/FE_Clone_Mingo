import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/new-topic";
import Topic from "./pages/topic";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import ResetPassword from "./pages/reset-password";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-topics" element={<New />} />
        <Route path="/topics" element={<Topic />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
