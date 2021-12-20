import React from 'react'
import {Row,Container,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './menu.css'

function Menu() {
         return (
                  <Container>
                  <Row className="justify-content-center" style={{height:"100vh"}}>
                       <Col className="menu text-center" xl={5}>
          <div><button><Link to="/easy">Easy</Link></button></div>
          <div><button><Link to="/medium">medium</Link></button></div>
          <div><button><Link to="/easy">medium</Link></button></div>                       
                       </Col>    
                  </Row>
                  </Container>
         )
}

export default Menu