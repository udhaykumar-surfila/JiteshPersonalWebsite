import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "mouse-follower/src/scss/index.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Body from "./components/Body";

function App() {
  MouseFollower.registerGSAP(gsap);

  const cursor = new MouseFollower();

  return (
    <div className="App bg-[#F8F9FA]">
      <Body />
    </div>
  );
}

export default App;
