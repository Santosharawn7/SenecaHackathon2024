import { Row, Col } from "react-bootstrap";
import SocialMediaIcons from "../SocialMedia/socialMedia";
//import SampleImage from "../../svgs/sample.jpg";
import "./video.css";
import { Video } from "../../Data/Schema/videoSchema";

export default function Detailvideo({ newsItem }: { newsItem: Video }) {
  return (
    <Row>
      <Col md={5} className="mb-4">
        <h1 style={{ color: "red", margin: "1em 0" }}>
          <strong>{newsItem.title}</strong>
        </h1>
        <p>Written by {newsItem.author}</p>
        <div className="red-background curved-border">
          <SocialMediaIcons />
        </div>
      </Col>
      <Col md={7}>
        <img src={""} alt="Sample" style={{ width: "75%" }} />
        <p>
          <span style={{ fontSize: "xxx-large", fontWeight: "700" }}>
            {newsItem.body.charAt(0)}
          </span>
          {newsItem.body.slice(1)}
        </p>
      </Col>
    </Row>
  );
}
