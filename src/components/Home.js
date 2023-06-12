import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mainimg from "../utils/img/jitesh.jpg";

const Home = () => {
  return (
    <Container fluid className="z-10 sm:h-auto h-[90vh]" id="home">
      <Row>
        <Col sm={5} className="sm:p-0">
          <img
            src={mainimg}
            alt="Jitesh"
            className="w-full sm:h-[100vh] sm:-mt-16"
          />
        </Col>
        <Col sm={7} className="flex flex-col justify-center items-center">
          <h1 className="font-playfair font-medium mt-4 sm:mt-0">
            Jitesh Agrawal
          </h1>
          <h4 className="font-dmsans text-center text-gray-400 font-medium">
            Nomad, Entrepreneur, Author<br></br> and more!
          </h4>
          <a href="#my-story">
            <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 mt-4 font-playfair shadow-md font-semibold">
              Know more
            </button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
