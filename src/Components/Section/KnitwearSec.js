import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const KnitwearSec = () => {
  return (
    <Container>
      <Row
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "64%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className=""
        >
          <div className="" style={{ display: "flex", justifyContent: "center",textAlign: "center" }}>
            <h3
              className=""
              style={{
                color: "#007bff",
                fontWeight: "bold",
                textalign: "center",
              }}
            >
              Order Custom Knitwear Online
            </h3>
          </div>
          <div className="mt-3" style={{ textAlign: "center" }}>
            <p>
              Football scarves knit fabric panels with custom design knitted in
              stitch by stitch Made in UK, no minimums.No minimum order
              quantity, Production from 1 piece, discounts from 2 pcs with same
              design. The perfect offer for sports teams, merchandising, the
              personalized gift for every occasion.
            </p>
          </div>
          <div
            className="mt-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link className="btn btn-success" to="/football-scarves">
              Select Product & Place Order
            </Link>
            {/* <Link
              className=""
              style={{
                color: "#007bff",
                fontWeight: "bold",
                textalign: "center",
              }}
            >
              Select Product & Start Design
            </Link> */}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default KnitwearSec;
