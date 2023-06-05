import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mainimg from "../utils/img/jitesh.jpg";

const Home = () => {
  return (
    <Container fluid className="h-[100vh]">
      <Row>
        <Col sm={6} className="flex flex-col justify-center items-center">
          <img src={mainimg} alt="Jitesh" className="w-full h-[100vh] p-2 -mt-16 z-10" />
        </Col>
        <Col sm={6} className="flex flex-col justify-center items-center">
          <h1>Jitesh Agrawal</h1>
          <h4>Nomad, Entrepreneur, Author and more!</h4>
          <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 mt-4">Know more</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
