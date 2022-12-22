import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Signin from "./pages/Signin/Signin";
import { Routes, Route } from "@solidjs/router";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/music" component={Home} />
        <Route path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/signin" component={Signin} />
      </Routes>
    </div>
  );
}

export default App;
