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
    <Container fluid id="contact">
      <Row>
        <Col
          sm={6}
          className="flex flex-col justify-center items-center sm:h-[100vh] h-[50vh] text-slate-50 bg-black font-dmsans font-medium"
        >
          <h1 className="font-playfair font-medium">Reach Out</h1>
          <div className="p-12">
            <h3>Jitesh Agrawal</h3>
            <p>jitesh@thelosthostels.com</p>
          </div>
          <div>
            <p>CONNECT WITH ME</p>
            <div className="flex justify-between">
              <a
                href="https://www.instagram.com/thelosthostels/"
                target="_blank"
              >
                <img src={instagram} alt="instagram" className="w-8"></img>
              </a>
              <a href="https://twitter.com/jiteshjam" target="_blank">
                <img src={twitter} alt="twitter" className="w-8"></img>
              </a>
              <a href="https://www.facebook.com/losthostelgoa/" target="_blank">
                <img src={facebook} alt="facebook" className="w-8"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/jiteshagrawal1/?originalSubdomain=in"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" className="w-8"></img>
              </a>
            </div>
          </div>
        </Col>

        <Col sm={6} className="sm:h-[100vh] bg-black sm:p-0">
          <img
            src={contactimg}
            alt={contactimg}
            className="sm:h-[100vh] bg-black float-right object-cover"
          />
        </Col>
      </Row>
      <p className="text-white text-xs bg-black w-full text-right p-1 absolute left-0">
        <a
          href="https://www.linkedin.com/in/vanshika-bhojnagarwala/"
          target="_blank"
          className="text-white decoration-black"
        >
          &lt;Developed by V/&gt;
        </a>
      </p>
    </Container>
  );
};

export default Contact;
