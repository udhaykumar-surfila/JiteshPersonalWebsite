import NavBar from "./Navbar";
import MyStory from "./MyStory";
import Work from "./Work";
import Blog from "./Blog";
import Home from "./Home";
import Contact from "./Contact";

const Body = () => {
  return (
    <>
      <NavBar />
      <Home />
      <MyStory />
      <Work />
      <Contact />
    </>
  );
};

export default Body;
