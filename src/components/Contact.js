import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import contactimg from "../utils/img/jitesh2.jpg";
import facebook from "../utils/img/facebook.png";
import twitter from "../utils/img/twitter.png";
import linkedin from "../utils/img/linkedin.png";
import instagram from "../utils/img/instagram.png";

const Contact = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="flex flex-col justify-center items-center h-[100vh] text-slate-50 bg-black font-dmsans font-medium">
          <h1 className="font-playfair font-medium">Reach Out</h1>
          <div className="p-12">
            <h3>Jitesh Agrawal</h3>
            <p>jitesh@thelosthostels.com</p>
          </div>
          <div>
            <p>CONNECT WITH ME</p>
            <div className="flex justify-between">
              <img src={instagram} alt="instagram"></img>
              <img src={twitter} alt="twitter"></img>
              <img src={facebook} alt="facebook"></img>
              <img src={linkedin} alt="linkedin"></img>
            </div>
          </div>
        </Col>
        <Col className="h-[100vh] bg-black">
          <img
            src={contactimg}
            alt={contactimg}
            className="h-[100vh] bg-black float-right"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
