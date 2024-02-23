import React from 'react'
import Button from './Button'
import './Content.css'

function Cont() {
  return (
    <div className="Leftcont">
      <div className="text">
        <p className="macro">404 Page</p>
        <h1 className="title">Page not found</h1>
        <p className="pf">Sorry, the page you are looking for doesn't exist.<br></br> Here are some helpful links:</p>
      </div>
      <div className="buttons">
        <Button value={"Go Back"} txtcolor={"#434f61"}  />
        <Button value={"Take Me Home"} bgcolor={"#25c4f4"} txtcolor={"white"} bgborder={"none"} />
      </div>
    </div>
  );
}

export default Cont;





