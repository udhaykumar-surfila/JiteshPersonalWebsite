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
    <Container className="" id="">
      <Row>
        <Col
          className="flex flex-row justify-between items-center py-10 text-center"
          id="hostels"
        >
          <img src={losthostel} alt="" className="w-60 h-80 shadow-lg" />
          <div>
            <h1 className="font-playfair font-medium">The Lost Hostels</h1>
            <p className="font-dmsans text-center text-gray-400 font-thin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              laudantium atque quos, quasi nulla ut adipisci ratione sapiente
              totam eos. Fuga repellendus et, perspiciatis iure vero aperiam
              earum beatae saepe!
            </p>
            <a href="https://thelosthostels.com/" target="_blank">
              <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 font-playfair">
                Know more
              </button>
            </a>

            <h6 className="mt-4">
              Learn how to start your own hostel{" "}
              <a
                href="https://jiteshagrawal.graphy.com/courses/Idea-to-Reality---Opening-your-own-Backpacking-Hostel-63c7b927e4b00645150ea5ca"
                target="_blank"
              >
                HERE.
              </a>
            </h6>
          </div>
          <img src={soul} alt="" className="w-60 h-80 shadow-lg" />
        </Col>
      </Row>
      <hr></hr>
      <Row id="books">
        <Col className="flex justify-center items-center py-10 text-center">
          <div className="p-4">
            <h1 className="font-playfair font-medium">A Lost Soul</h1>
            <p className="font-dmsans text-center text-gray-400 font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              blanditiis veritatis voluptatum tempore debitis ullam inventore
              totam nostrum distinctio maiores sit labore, ab placeat, quae
              magni, et quam suscipit aspernatur?
            </p>
            <a
              href="https://www.amazon.in/Lost-Soul-backpackers-journey-discovery/dp/1648997570/ref=sr_1_4?crid=LD6RXMZUR74A&keywords=a+lost+soul&qid=1686158367&s=books&sprefix=a+lost+sou%2Cstripbooks%2C307&sr=1-4"
              target="_blank"
            >
              <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 font-playfair">
                Buy now
              </button>
            </a>
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
            <a
              href="https://www.amazon.in/Lost-Love-backpackers-Journey-Oneness/dp/B0BYKCF228/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
              target="_blank"
            >
              <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 font-playfair">
                Buy now
              </button>
            </a>
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
            <a
              href="https://www.audacy.com/podcast/travel-talks-with-j-3ead4"
              target="_blank"
            >
              <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 font-playfair">
                Listen now
              </button>
            </a>
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
