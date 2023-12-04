import { FloatingLabel, Form, Card, Container, Row, Col} from "react-bootstrap";



import Markdown from "marked-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import markdownEg from "./markdownEg";

import { useState } from "react";


function App() {
  const [markdown, setMarkdown] = useState(markdownEg);

  const changeEditor = (event) => {
    setMarkdown(event.target.value);
    event.target.style.height = `${event.target.scrollHeight}px`
  }

  return (
      <>
      <h1 className="text-center">Markdown Previewer</h1>
      <h6 className="text-center"><a target="__blank" href="https://github.com/Banzaidev">by Banzaidev</a></h6>
        <Container fluid='auto'>
          <Row className="g-2 m-2">
            <Col className='h-auto' sm={true}>
              <FloatingLabel controlId="editor" label="Editor">
                <Form.Control
                  as="textarea"
                  placeholder=""
                  value={markdown}
                  style={{height: '690px'}} //690px the height of markdown example
                  onChange={(e) => changeEditor(e)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={true}>
              <Card className="mw-100 bg-info">
                <Card.Header style={{fontWeight: "bold"}}>Previewer</Card.Header>
                <Card.Body id='preview'>
                  <Markdown breaks={true}>{markdown}</Markdown>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </>
  )
}

export default App;