import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import { io } from "socket.io-client";
import { FormEvent, useEffect, useState } from "react";

const ADDRESS = "http://localhost:3030";

const socket = io(ADDRESS, { transports: ["websocket"] });

const ChatBox = () => {
  const [user, setUser] = useState("");

  
  
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });



  }, []);

  const handleSubmit =(e: FormEvent)=>{
    e.preventDefault()

    socket.emit('setUser', {
      user
    })

  }
  return (
    <Container fluid className="px-4 mt-3">
      <Row style={{ height: "95vh" }}>
        <Col md={10} className="d-flex flex-column justify-content-between">
          <Form onSubmit={() => {handleSubmit}}>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form>

          <ListGroup>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </ListGroup>

          <Form onSubmit={() => console.log("hi")}>
            <Form.Control type="text" placeholder="Enter your message" />
          </Form>
        </Col>
        <Col md={2}>
          <div className="mb-3">Users online</div>
          <ListGroup>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatBox;
