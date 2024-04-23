import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { BookList } from "./pages/BookList";
import Carousel from "./components/Carousel";
import { BookInfo } from "./pages/BookInfo";
import { BookReader } from "./pages/BookReader";
import { Contribution } from "./pages/Contribution";
import { UserProfile } from "./pages/UserProfile";
import { Profile } from "./pages/Profile";
import { BookShelf } from "./pages/BookShelf";
import { ForgotPassword } from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Register/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/booklist" element={<BookList/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/slider" element={<Carousel/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/bookinfo/:id" element={<BookInfo/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/bookreader/:id" element={<BookReader/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/contribute" element={<Contribution/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/user/:id" element={<UserProfile/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/myshelf" element={<BookShelf/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/forgotPassword" element={<ForgotPassword/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
