import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Container className="h-100 p-0" fluid>
      <Row className="h-100">
        <Col
          md={12}
          xl={5}
          className="h-100 align-items-center d-flex justify-content-center">
          <p className="m-0 ms-3" id="left-col-title">
            La nuovissima <br /> App meteo per <br />
            STEFANO!
          </p>
        </Col>
        <Col
          xs={12}
          xl={7}
          className="h-100 p-0 m-0 d-flex flex-column justify-content-center">
          <Card id="welcome-card">
            <Card.Body className="d-flex flex-column justify-content-center gap-5 align-items-center">
              <Card.Title>
                {" "}
                <h1>Previsioni dove vuoi tu!</h1>
              </Card.Title>
              <div className="text-dark">
                <div className="fs-3">
                  I comuni italiani: Strangolagalli, Paperino, Occhiobello,
                  Gatta,Inferno compresi! <br /> Cerca il comune piu' apprezzato
                  dai nostri utenti: <br />{" "}
                  <span className="fw-bold">Batman </span>, ufficialmente dalla
                  turchia(TR)👀
                </div>
              </div>
              <Button
                onClick={() => {
                  navigate("/meteo");
                }}>
                Vedi previsioni del meteo!
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
