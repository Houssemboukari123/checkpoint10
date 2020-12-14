import { Form } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>
            <i> Email address</i>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>
            <i>Password</i>
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
