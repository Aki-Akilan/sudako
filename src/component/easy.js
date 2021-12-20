import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './game.css'
import {Form,Navbar,Button,Col,Row,Container,Nav} from 'react-bootstrap';
import Board from './board'
import Winner from './winner'
import Timer from './timer'
import { useStopwatch } from 'react-timer-hook';

function Easy() {
console.log("main");

const [win,swin]=useState("Game On");

const [a,sa]=useState('4');
const [a1,sa1]=useState('');
const [a2,sa2]=useState('');
const [b,sb]=useState('2');
const [b1,sb1]=useState('');
const [b2,sb2]=useState('');

const [aa,saa]=useState('3');
const [aa1,saa1]=useState('');
const [aa2,saa2]=useState('2');
const [bb,sbb]=useState('');
const [bb1,sbb1]=useState('');
const [bb2,sbb2]=useState('6');

const [c,sc]=useState('');
const [c1,sc1]=useState('');
const [c2,sc2]=useState('3');
const [d,sd]=useState('');
const [d1,sd1]=useState('');
const [d2,sd2]=useState('');


const [cc,scc]=useState('');
const [cc1,scc1]=useState('2');
const [cc2,scc2]=useState('');
const [dd,sdd]=useState('3');
const [dd1,sdd1]=useState('');
const [dd2,sdd2]=useState('4');

const [e,se]=useState('2');
const [e1,se1]=useState('');
const [e2,se2]=useState('5');
const [f,sf]=useState('');
const [f1,sf1]=useState('3');
const [f2,sf2]=useState('');


// #ee9ca7
// → 
// #ffdde1
const [ee,see]=useState('');
const [ee1,see1]=useState('3');
const [ee2,see2]=useState('');
const [ff,sff]=useState('6');
const [ff1,sff1]=useState('');
const [ff2,sff2]=useState('5');

const {
  seconds,
  minutes,
  hours,
  days,
  isRunning,
  start,
  pause,
  reset,
} = useStopwatch({ autoStart: true });



  return (
    <React.Fragment>
            <Container>
                    <Row className="justify-content-center " xl={5}>
                      <Col className="color fullbox justify-content-center" xs={12} sm={12} md={8} lg={6} xl={5} >

                      <Row className="justify-content-center">
                       <Col className="text-center" id="tit">
                       <Navbar  expand="xxl">
  <Navbar.Brand href="#" className="sudako">Sudako</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    </Nav>
  </Navbar.Collapse>
</Navbar>
                       </Col>
                      
                      </Row>
                                              {/* first box  */}
                      <Row  className="text-center mt-4" ><Col className="text-center" xl={12}>
                      <div className="contain">
                        <div className="left" id="t1"><Board topbottom="25px" dis={true} color="#ffdde1" a={a} sa={sa} /></div><div className="left"><Board a={a1} sa={sa1}  color="white"/></div>
                        <div className="left"><Board  a={a2} sa={sa2}  color="white"/></div>
                                       
                                              {/* second box  */}
                        
                        <div className="left"><Board a={b} sa={sb} dis={true} color="#ffdde1" /></div><div className="left"><Board a={b1} sa={sb1} color="white"/></div>
                        <div className="left"><Board topright="25px" a={b2} sa={sb2} color="white"/></div>
                        
                                              {/* first box colunm 1  */}
                        <div className="left" id="t2"><Board a={aa} sa={saa} dis={true}  color="#ffdde1"/></div><div className="left"><Board a={aa1} sa={saa1} color="white"/></div>
                        <div className="left"><Board a={aa2} sa={saa2} dis={true} color="#ffdde1"/></div>
                        
                                              {/* second box colunm 1  */}

                        <div className="left"><Board a={bb} sa={sbb} color="white" /></div><div className="left"><Board a={bb1} sa={sbb1}  color="white"/></div>
                        <div className="left"><Board a={bb2} sa={sbb2} dis={true} color="#ffdde1"/></div>

                                                {/* third box  */}

                      <div className="left" id="t3"><Board a={c} sa={sc} color="white"/></div><div className="left"><Board a={c1} sa={sc1}  color="white"/></div>
                        <div className="left"><Board a={c2} sa={sc2} dis={true} color="#ffdde1"/></div>
                                       
                                              {/* fourth box  */}
                        
                        <div className="left"><Board a={d} sa={sd} color="white" /></div><div className="left"><Board a={d1} sa={sd1} color="white"/></div>
                        <div className="left"><Board a={d2} sa={sd2} color="white"/></div>




                                              {/* third box colunm 1 */}    

                      <div className="left" id="t4"><Board a={cc} sa={scc}  color="white"/></div><div className="left"><Board a={cc1} sa={scc1} dis={true} color="#ffdde1"/></div>
                        <div className="left"><Board a={cc2} sa={scc2}  color="white"/></div>
                                       
                                              {/* fourth box colunm 1 */}
                        
                        <div className="left"><Board a={dd} sa={sdd} dis={true}  color="#ffdde1" /></div><div className="left"><Board a={dd1} sa={sdd1}  color="white"/></div>
                        <div className="left"><Board a={dd2} sa={sdd2} dis={true} color="#ffdde1"/></div>
                        
                                              {/* fiveth box  */}
                        <div className="left" id="t5"><Board a={e} sa={se} dis={true} color="#ffdde1"/></div><div className="left"><Board a={e1} sa={se1} color="white"/></div>
                        <div className="left"><Board a={e2} sa={se2} dis={true} color="#ffdde1"/></div>
                        
                                              {/* sixth box  */}

                        <div className="left"><Board a={f} sa={sf} color="white" /></div><div className="left"><Board a={f1} sa={sf1} dis={true} color="#ffdde1"/></div>
                        <div className="left"><Board a={f2} sa={sf2}  color="white"/></div>

                                                {/* fivth box colunm 1  */}

                      <div className="left" id="t6"><Board bottomleft="25px" a={ee} sa={see} color="white"/></div><div className="left"><Board a={ee1} sa={see1} dis={true} color="#ffdde1"/></div>
                        <div className="left"><Board a={ee2} sa={see2} color="white"/></div>
                                       
                                              {/* sixth box colounm 1  */}
                        
                        <div className="left"><Board a={ff} sa={sff} dis={true} color="#ffdde1" /></div><div className="left"><Board a={ff1} sa={sff1}  color="white"/></div>
                        <div className="left"><Board bottomright="25px" a={ff2} sa={sff2} dis={true} color="#ffdde1"/></div>
                        </div>
                        </Col></Row>
                        
                        <Row className="justify-content-center mt-4">
                       <Col className="text-center">
                        <div className="last">
                        <div className="winner">

                        <Winner swin={swin} xl={3} a={a} a1={a1} a2={a2} b={b} b1={b1} b2={b2} c={c} c1={c1} c2={c2} d={d} d1={d1} d2={d2} aa={aa} aa1={aa1} aa2={aa2} bb={bb} bb1={bb1} bb2={bb2} cc={cc} cc1={cc1} cc2={cc2} dd={dd} dd1={dd1} dd2={dd2} e={e} e1={e1} e2={e2} f={f}f1={f1} f2={f2} ee={ee} ee1={ee1} ee2={ee2} ff={ff} ff1={ff1} ff2={ff2}/>
                        
                          <div className="timertext">
                   <Timer seconds={seconds} win={win} minutes={minutes} pause={pause}/>     
                        </div>
                        <p>{win}</p>
                        </div>
                        </div>
                       </Col>
                      
                      </Row>


                      </Col>
                      {/* <Col><Winner xl={3} a={a} a1={a1} a2={a2} b={b} b1={b1} b2={b2} c={c} c1={c1} c2={c2} d={d} d1={d1} d2={d2} aa={aa} aa1={aa1} aa2={aa2} bb={bb} bb1={bb1} bb2={bb2} cc={cc} cc1={cc1} cc2={cc2} dd={dd} dd1={dd1} dd2={dd2} e={e} e1={e1} e2={e2} f={f}f1={f1} f2={f2} ee={ee} ee1={ee1} ee2={ee2} ff={ff} ff1={ff1} ff2={ff2}/></Col> */}
                    </Row>
            </Container>


    </React.Fragment>
  )
}

export default Easy
