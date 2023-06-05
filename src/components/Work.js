import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mainimg from "../utils/img/jitesh.jpg";

const Work = () => {
  return (
    <Container className="">
      <Row>
        <Col className="flex flex-col justify-center items-center h-[100vh]">
          <h1>What I Do?</h1>
          <p>AND LOVE</p>
          <Carousel variant="dark">
            <Carousel.Item>
              <div className="flex flex-row justify-center w-screen">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={mainimg} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={mainimg} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={mainimg} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex flex-row justify-center w-screen">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={mainimg} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={mainimg} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={mainimg} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
