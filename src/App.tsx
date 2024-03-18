import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
