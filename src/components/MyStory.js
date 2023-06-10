import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyStory = () => {
  return (
    <Container fluid className="bg-[#A4D0D8] text-slate-50" id="my-story">
      <Row>
        <Col className="flex flex-col justify-center items-center sm:h-[70vh]">
          <h1 className="font-playfair font-medium">My Story</h1>
          <p className="w-2/3 py-4 font-dmsans font-medium text-md">
            Jitesh Agrawal, a nomad, and an entrepreneur is an alumnus of NIT
            Raipur. He started his entrepreneurial journey in 2015 and founded
            The Lost Hostels, a backpacker hostel chain based in India. He has
            encountered many travelers from all over the world, and experienced
            and gained wisdom from their stories. <br></br>
            <br></br>He published his first fictional book "A Lost Soul" in
            2020. "Lost Love" is his second fictional book inspired by true
            events. He is a lost soul himself who loves to explore, travel,
            write, and enjoy deep discussions about human behavior, mind, and
            spirituality.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyStory;
