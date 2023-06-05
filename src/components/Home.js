import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mainimg from "../utils/img/jitesh.jpg";

const Home = () => {
  return (
    <Container fluid className="h-[95vh]">
      <Row>
        <Col sm={6} className="">
          <img src={mainimg} alt="Jitesh" className="w-full h-full -mt-16" />
        </Col>
        <Col sm={6} className="flex flex-col justify-center items-center">
          <h1 className="font-playfair font-medium">Jitesh Agrawal</h1>
          <h4 className="font-dmsans text-center text-gray-400 font-thin">Nomad, Entrepreneur, Author<br></br> and more!</h4>
          <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 mt-4 font-playfair">Know more</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
