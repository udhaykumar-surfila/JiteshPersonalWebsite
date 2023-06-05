import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import contactimg from "../utils/img/jitesh2.jpg";

const Contact = () => {
  return (
    <Container fluid className="">
      <Row>
        <Col className="flex flex-col justify-around items-center h-[100vh] text-slate-50 bg-black">
          <h1>Reach Out</h1>
          <div>
            <h3>Jitesh Agrawal</h3>
            <p>jitesh@thelosthostels.com</p>
          </div>
          <div>
            <p>CONNECT WITH ME</p>
            <p>CONNECT WITH ME</p>
          </div>
        </Col>
        <Col  className="h-[100vh] bg-black">
          <img src={contactimg} alt={contactimg}  className="h-[100vh] bg-black float-right"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
