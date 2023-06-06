import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import losthostel from "../utils/img/losthostel.jpg";
import soul from "../utils/img/soul.jpg";
import lostsoul from "../utils/img/lostsoul.jpg";
import lostlove from "../utils/img/lostlove.webp";
import traveltalks from "../utils/img/traveltalks.jpg";

const Work = () => {
  return (
    <Container className="">
      <Row>
        <Col className="flex flex-row justify-between items-center py-10 text-center">
          <img src={losthostel} alt="" className="w-60 h-80 shadow-lg" />
          <div>
            <h1 className="font-playfair font-medium">The Lost Hostels</h1>
            <p className="font-dmsans text-center text-gray-400 font-thin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              laudantium atque quos, quasi nulla ut adipisci ratione sapiente
              totam eos. Fuga repellendus et, perspiciatis iure vero aperiam
              earum beatae saepe!
            </p>
            <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 font-playfair">
              Know more
            </button>

            <h6 className="mt-4">Learn how to start your own hostel HERE.</h6>
          </div>
          <img src={soul} alt="" className="w-60 h-80 shadow-lg" />
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col className="flex justify-center items-center py-10 text-center">
          <div className="p-4">
            <h1 className="font-playfair font-medium">A Lost Soul</h1>
            <p className="font-dmsans text-center text-gray-400 font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              blanditiis veritatis voluptatum tempore debitis ullam inventore
              totam nostrum distinctio maiores sit labore, ab placeat, quae
              magni, et quam suscipit aspernatur?
            </p>
            <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 font-playfair">
              Buy now
            </button>
          </div>
          <img src={lostsoul} alt="" className="w-60 h-80 shadow-lg" />
        </Col>
        <Col className="flex justify-center items-center text-center">
          <img src={lostlove} alt="" className="w-60 h-80 shadow-lg" />
          <div className="p-4">
            <h1 className="font-playfair font-medium">Lost Love</h1>
            <p className="font-dmsans text-center text-gray-400 font-thin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              eveniet eum porro doloribus maiores est error dignissimos sed illo
              accusantium. Minus molestiae error rerum esse aut soluta eligendi
              officia! Quibusdam.
            </p>
            <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 font-playfair">
              Buy now
            </button>
          </div>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col className="flex justify-center items-center py-10 text-center">
          <img src={traveltalks} alt="" className="w-60 shadow-lg" />
          <div className="p-4">
            <h3 className="font-playfair font-medium">Travel Talks with J</h3>
            <p className="font-dmsans text-center text-gray-400 font-thin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              eveniet eum porro doloribus maiores est error dignissimos sed illo
              accusantium. Minus molestiae error rerum esse aut soluta eligendi
              officia! Quibusdam.
            </p>
            <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 font-playfair">
              Listen now
            </button>
          </div>
        </Col>
        <Col className="flex justify-center items-center py-10 text-center">
          <h6>
            Text about more things such as being an Angel investor, Life coach
            and mentor. More details such as Lost launchpad, yoga classes etc.
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
