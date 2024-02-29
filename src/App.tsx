import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import HomePage from "./component/homePage/HomePage";
import ProtectedRoutes from "./services/ProtectedRoutes";
import Prova from './component/prova/prova1';
import Course from "./component/courses/Course";
import PageCourse from "./component/pageCourse/PageCourse";


function App() {


  return (
    <div id="app">
      <Router>
        <Routes>
        <Route
            path="/"
            element={<ProtectedRoutes />}
          >
            <Route
              path="/homePage"
              element={<HomePage />}
            ></Route>
            <Route
              path="/courses"
              element={<Course />}
            ></Route>
            <Route
              path="/course_page/:idCourse"
              element={<PageCourse />}
            ></Route>
            <Route
              path="/prova"
              element={<Prova />}
            ></Route>
        </Route>
          <Route
            path="/authentication"
            element={
              <Login
              />
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
