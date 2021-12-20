import React from 'react'
import './board.css'


function Board(props)
{            
console.log("main board");
  const dis=props.dis
  const sa=props.sa;
  const a=props.a;
         return  (
                  <React.Fragment>
                          <div>
                            <input className="input" value={a} onChange={(e)=>sa(e.target.value)} style={{backgroundColor:props.color,borderTopLeftRadius:props.topbottom,borderTopRightRadius:props.topright,borderBottomLeftRadius:props.bottomleft,borderBottomRightRadius:props.bottomright}} disabled={dis} />
                          </div>
                          
                          
                  </React.Fragment>

                 )
}

export default Board
