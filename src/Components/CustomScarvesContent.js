import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const CustomScarvesContent = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg="6" md="12" className="mt-5 mt-lg-0">
          <div>
            {/* <h6 className="text-primary mb-1">— Product Development</h6> */}
            <h3 className="mb-0">Custom Christmas Scarves</h3>
          </div>
          <p className="mt-1 mb-3 animated3" style={{fontSize:'14px'}}>
            Welcome to the world of digital on-demand knitwear at Wildemasche!
            Design and order your own custom knitted products online, and
            receive your made-to-order scarf in just a few days. Our innovative
            technology knits your unique design pixel by pixel, creating a
            personalized fashion item that's truly one-of-a-kind. With options
            to add your logo, photo, or message, you can create a product that's
            as individual as you are. Order today and enjoy worldwide delivery!{" "}
          </p>
          <p className="animated3" style={{fontSize:'14px'}}>
            Exciting news: we now offer custom Pet Christmas Sweaters featuring
            your cat, dog, or other beloved pet knitted in! Partner up with your
            furry friend and pose for a festive Christmas portrait with your
            personalized knitted sweater or Christmas jumper. Design online and
            order to create a heartwarming keepsake that captures the holiday
            spirit and the bond with your pet.{" "}
          </p>
        </Col>
        <Col lg="6" md="12" className="mt-5 mt-lg-0">
          {/* <h6 className="font-w-6 text-primary animated3 mb-2">About</h6> */}
          {/* <h1 className="mb-3 animated3 font-w-5">
            New Arrival <span className="font-w-8">Modern Chair</span>
          </h1> */}
          {/* Product Development */}
          <div>
            {/* <h6 className="text-primary mb-1">— Product Development</h6> */}
            <h3 className="mb-0">Pixel to knitwear since 2013.</h3>
          </div>
          <p className="mt-1 mb-3 animated3" style={{fontSize:'14px'}}>
            Welcome to Knitting World, the #1 sports scarf company that specializes
            in creating the best bespoke scarves for soccer, football, and
            college teams. With our online design tool, you can easily customize
            your own scarves with no minimum order requirement. Our scarves are
            proudly Made in Germany, ensuring high quality and durability, and
            we offer short lead times to get your custom scarves to you quickly.{" "}
          </p>
          <p className="animated3" style={{fontSize:'14px'}}>
            With our fine knit jacquard technology, you can now design and order
            your own custom knitshirt or light sweater, featuring your logo,
            photo, text, or pattern knitted in. It's a fantastic way to start
            your own fashion line with a one-of-a-kind creation that's uniquely
            yours. Experience the Wildemasche difference today and elevate your
            team, event, or fashion line with our high-quality custom knitwear.
            Design your custom sports scarf, sweater, or knitshirt online and
            let us bring your vision to life!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomScarvesContent;
