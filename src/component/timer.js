import React,{useState,useEffect} from 'react'
import './timer.css'
import {Col,Row} from 'react-bootstrap';
function Timer(props) {
  if(props.win!="Game On")
  {
    props.pause(props.minutes,props.seconds)
  }
         
         return (
                  <div>
                  <Row><Col className="text-center mt-4">
                  <h3>Your Time Start</h3>
                  <div className="span text-center mt-4"><p className="text"><i >minutes: {props.minutes} seconds: {props.seconds}</i></p></div>
                  </Col></Row>
                           
                           
                  </div>
         )
}

export default Timer
