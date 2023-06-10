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
          className="flex sm:flex-row flex-col justify-between items-center py-10 text-center"
          id="hostels"
        >
          <img src={losthostel} alt="" className="w-60 h-80 shadow-lg" />
          <div>
            <h1 className="font-playfair font-medium sm:mt-0 mt-4">
              The Lost Hostels
            </h1>
            <p className="font-dmsans text-center text-gray-400 font-thin px-4">
              Welcome to The Lost Hostels, where adventure and comfort come
              together to create a unique travel experience. Our hostels are
              designed for travellers seeking to explore new destinations, make
              new friends, and create unforgettable memories. <br></br>At The
              Lost Hostels, we pride ourselves on providing affordable and
              comfortable accommodations in some of India's most famous
              destinations. Each hostel is strategically located, allowing
              guests to easily access the city's top attractions, nightlife, and
              cultural experiences.
            </p>
            <a
              href="https://www.booking.com/hotel/in/the-lost-hostels-goa-palolem-beach.tl.html"
              target="_blank"
            >
              <button className="text-slate-100 bg-[#A4D0D8] p-2 px-4 font-playfair">
                Book Now
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
          <img src={soul} alt="" className="w-60 h-80 shadow-lg sm:mt-0 mt-4" />
        </Col>
      </Row>
      <hr></hr>
      <Row id="books">
        <Col
          sm={6}
          className="flex sm:flex-row flex-col-reverse justify-center items-center py-10 text-center"
        >
          <div className="p-4">
            <h1 className="font-playfair font-medium">A Lost Soul</h1>
            <p className="font-dmsans text-center text-gray-400 font-thin text-sm">
              This book is a tale of a lost soul consumed by the glamor of this
              world and seeks meaning and purpose in his life. Jitesh lives a
              fast backpacker life in India in which he goes through the motions
              of love, betrayal, depression, spiritual scams and tries to
              overcome all by consuming drugs, spending time in hippie
              communities and blindly following sages and babas. When a pandemic
              caused by Coronavirus hits unexpectedly, he is forced to stay in
              one place—his backpacker hostel in Goa. It is here he is forced to
              come to terms with his life and the true meaning of living. Will
              he find enlightenment, or will he be lost forever?
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
        <Col
          sm={6}
          className="flex sm:flex-row flex-col justify-center items-center text-center"
        >
          <img src={lostlove} alt="" className="w-60 h-80 shadow-lg" />
          <div className="p-4">
            <h1 className="font-playfair font-medium">Lost Love</h1>
            <p className="font-dmsans text-center text-gray-400 font-thin">
              J and Anu meet in a surf beach town in the west of India where
              love sparks between them. Soon, he embarks on his backpacking
              journey. J explores the newfound love through the breath-taking
              landscape of Europe and finds himself conflicted about his
              feelings. Something life-changing begins. Lost Love is a story of
              a lost soul who is searching for love. Will he find love, or will
              he be lost forever?
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
        <Col
          sm={6}
          className="flex sm:flex-row flex-col  justify-center items-center py-10 text-center"
        >
          <img src={traveltalks} alt="" className="w-60 shadow-lg" />
          <div className="p-4 sm:border-r-2">
            <h3 className="font-playfair font-medium">Travel Talks with J</h3>
            <p className="font-dmsans text-center text-gray-400 font-thin text-sm">
              Welcome to “Travel Talks with J”, sponsored by The Lost Hostels. I
              am your host Jitesh. In this podcast series, I will be diving into
              the transformative power of travel and how it impacts our personal
              growth, relationships, and perspectives on life. In each episode,
              I will be joined by guests from all walks of life, including
              fellow travelers, life coaches, bloggers and locals, who will
              share their own experiences and perspectives on how travel has
              transformed their lives. Let’s go!
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
        <Col
          sm={6}
          className="flex justify-center items-center py-10 text-center"
        >
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
