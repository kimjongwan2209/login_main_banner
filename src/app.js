import Main from "../src/pages/Main/Main";
import LogIn from "../src/pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const Introduce = () => {
//   const navigate = useNavigate();

//   const goToSign = () => {
//     navigate("/SignIn");
//   };

//   const goToLogIn = () => {
//     navigate("/LogIn");
//   };
// };

function App() {
  // const navigate = useNavigate();

  // const goToSign = () => {
  //   navigate("/SignIn");
  // };

  return (
    <BrowserRouter>
      <Routes>
        {/* <SignIn /> */}
        <Route path="/main" element={<Main />} />
        {/* <LogIn /> */}
        <Route path="/" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
