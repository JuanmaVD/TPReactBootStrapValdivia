import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../src/App.css"

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col xs={12}>
            <div className='footerdiv'>
            <h5>Our Company</h5>
            <p className="text-center">
            Some information about your company.
            </p>
            </div>
            <div className='footerdiv'> 
            <h5>Contact Us Email: </h5>
            <p>
            info@yourcompany.com Phone: (123) 456-7890
            </p>
            </div>
            </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;