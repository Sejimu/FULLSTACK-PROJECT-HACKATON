import { useEffect } from "react";
import "./App.css";
import { useAuthContext } from "./contexts/AuthContext";
import MainRoute from "./routes/MainRoute";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { checkAuth } = useAuthContext();
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div className="App">
      <MainRoute />
    </div>
  );
}

export default App;
