import React from 'react'
import {Row,Container,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './home.css'
function Home() {
         return (
                  <Container>
                  <Row  className="justify-content-center">
                       <Col className="home text-center" style={{height:"100vh",backgroundColor:"red"}} xl={5}>
                                    <div className="cen">
                                    <h1>Sudako</h1>
                                    <button><Link to="/menu">start</Link></button>
                                    </div>
                                    
                       </Col>    
                  </Row>
                  </Container>
         )
}

export default Home
