import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LandingPage } from "./pages/LandingPage.jsx";

function App() {
  return (
    <div className="root">
      <ToastContainer />
      <LandingPage />
    </div>
  );
}

export default App;
