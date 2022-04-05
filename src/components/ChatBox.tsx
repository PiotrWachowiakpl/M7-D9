import { Container, Row, Col } from "react-bootstrap";

const ChatBox = () => {
  return (
    <Container fluid style={{ height: "90vh" }}>
      <Row>
        <Col xs={8}><h1>UserName</h1></Col>
        <Col xs={4}><h1>UserName</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatBox;
